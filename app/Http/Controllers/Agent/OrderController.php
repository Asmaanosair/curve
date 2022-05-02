<?php

namespace App\Http\Controllers\Agent;

use App\Client;
use App\Commission;
use App\Enums\AOrderStatus;
use App\Events\NewOrder;
use App\Events\OrderAssigned;
use App\Events\OrderOperation;
use App\Fleet;
use App\Helper;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Driver\FCMController;
use App\Order;
use App\Products;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Gd\Driver;

class OrderController extends Controller
{
    /**
     * @group Integration API
     * Create an Order
     *  use this API to send an order to Pudo control panel
     *
     * @bodyParam  api_id string required your API ID Example: GZUdkhoBCB28zVZRdljnwMUs67S2kNz821r4yKX3QzUWLnvWEM8tIlulfU4UMkHY.

     * @bodyParam  order_price double required the price of the order products without any discounts or fees Example: 40.
     * @bodyParam  discount double the discount amount Example: 0.
     * @bodyParam  deliver_fees double required the delivery fees amount Example: 10.
     * @bodyParam  total_price double required the order total price after adding delivery fees and deducting the discount Example: 50.
     * @bodyParam  pick_up_lng string the longitude value for the pickup location Example: 21.24354345.
     * @bodyParam  pick_up_lat string the latitude value for the pickup location Example: 21.24354345.
     * @bodyParam  delivery_lng string required the longitude value for the delivery location Example: 21.24354345.
     * @bodyParam  delivery_lat string required the latitude value for the delivery location Example: 22.134566566.
     * @bodyParam  customer_name string the name of the customer needs the order Example salem:.
     * @bodyParam  customer_mobile string the mobile of the customer needs the order Example: 1234567890.
     * @bodyParam  delivery_time dateTime required must be like  Example: 2020-03-01 16:22:11.
     * @bodyParam  payment_method string required the way that customer will pay with Example: cash_on_delivery
     * @bodyParam  fleet_id int the driver id you can get from the list of driver (this field is optional) use it if you want to sed the order assigned to driver.
     */
//products Array the list of products will be in this order Example: [{"name":"product name","one_piece_price":20",quantity": 2,"total_price":4,"note":"if any note or leave it null"},{"name":"product name","one_piece_price":20,"quantity": 2,"total_price":40,"note":"if any note or leave it null"}].

     public function create(Request $request)
    {
        $user = $request->client;

        $validator = Validator::make($request->all(), [  //validate inputs

            "customer_name" => 'required',
            "customer_mobile" => 'required',
            "order_price" => 'required|numeric',
            "payment_method" => 'required',
            "delivery_time" => 'required|date|after_or_equal:now|date_format:m/d/Y H:i',
            "pick_up_lat" => 'required',
            "pick_up_lng" => 'required',
            "delivery_lng" => 'required',
            "delivery_lat" => 'required',

        ]);

        if ($validator->fails()) {
            // in case validator failed

            return response()->json(['message' => $validator->errors()], 500);
        }
        $inputs = $request->all();
        $result = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading=90:" . $request->pick_up_lat . "," . $request->pick_up_lng . "&destinations=" . $request->delivery_lat . "," . $request->delivery_lng . "&key=")->json();

        if ($result["status"] == "OK" && $result["rows"][0]["elements"][0]["status"]=='OK' ) {
            $kilos_count = $result["rows"][0]["elements"][0]["distance"]["value"] / 1000;

            $inputs['kilos_count'] = $kilos_count;

            $client = User::find($user->id);
            $fees_id = $client->commission_id;
            $fees = Commission::find($fees_id);

            if ($fees->type == 1) {
                $kilos_total_price = $fees->price * $inputs['kilos_count'];
                $inputs['kilos_total_price'] = substr($kilos_total_price, 0, 4);
            } else {
                $inputs['kilos_total_price'] = $fees->price;
            }
            $inputs['deliver_fees'] = $inputs['kilos_total_price'];
            $inputs['total_price'] += $inputs['deliver_fees'];

            $inputs['code'] = rand(0, 999999);
            $inputs = $request->all();

            $city = Helper::getCityByPoint($inputs['delivery_lng'] . ' ' . $inputs['delivery_lat']);

            if (!isset($city->id)) {
                return response()->json(['error' => "the location of delivery you set doesn't refer to any point inside Saudi Arabia"], 400);
            }

            $inputs['user_id'] = $user->id;
            $inputs['order_status_id'] = 1;
            $inputs['city_id'] = $city->id;

            $order = Order::create($inputs);

//        if ($request->has('products')){
//            foreach ($inputs['products'] as $product){
//                $product['order_id']= $order->id;
//                Products::create($product);
//            }
//        }

            $fcm = new FCMController();

            $fcm->assignOrder($order->id, $request->pick_up_lat, $request->pick_up_lng, 3);
            event(new OrderOperation($order));



            return response()->json(['message' => 'created', 'data' => $order], 200);
        } else {
            return response()->json(['message' => ['apiKey' => ['the error in api key or latitude &longitude']]], 500);
        }
    }

    /**
     * @group Integration API
     * Update an Order
     *  use this API to update an order programmatically on Pudo.
     * @bodyParam  api_id string required your API ID Example: GZUdkhoBCB28zVZRdljnwMUs67S2kNz821r4yKX3QzUWLnvWEM8tIlulfU4UMkHY.
     * @bodyParam  code  string required The code of the order to be the same on your system Example: 342334.
     * @bodyParam  number_of_products int the number of products in this order Example: 2.
     * @bodyParam  order_price double the price of the order products without any discounts or fees Example: 40.
     * @bodyParam  discount double the discount amount Example: 0.
     * @bodyParam  deliver_fees double the delivery fees amount Example: 10.
     * @bodyParam  total_price double the order total price after adding delivery fees and deducting the discount Example: 50.
     * @bodyParam  pick_up_lng string the longitude value for the pickup location Example: 21.24354345.
     * @bodyParam  pick_up_lat string the latitude value for the pickup location Example: 21.24354345.
     * @bodyParam  delivery_lng string the longitude value for the delivery location Example: 21.24354345.
     * @bodyParam  delivery_lat string the latitude value for the delivery location Example: 22.134566566.
     * @bodyParam  customer_name string the name of the customer needs the order Example salem:.
     * @bodyParam  customer_mobile string the mobile of the customer needs the order Example: 1234567890.
     * @bodyParam  delivery_time dateTime must be like  Example: 2020-03-01 16:22:11.
     * @bodyParam  products Array the list of products will be in this order Example: [{"name":"product name","one_piece_price":20",quantity": 2,"total_price":4,"note":"if any note or leave it null"},{"name":"product name","one_piece_price":20,"quantity": 2,"total_price":40,"note":"if any note or leave it null"}].
     * @bodyParam  payment_method string required the way that customer will pay with Example: cash_on_delivery
     * @bodyParam  fleet_id int the driver id you can get from the list of driver (this field is optional) use it if you want to sed the order assigned to driver.
     */

    public function update(Request $request){
        $validatedData = $request->validate([
            'code' => 'required|min:1|max:32',
        ]);

        $inputs = $request->all();
        $user = $request->client;

        $order = Order::where('user_id',$user->id)->where('code',$request->get('code'))->update($inputs);

        event(new OrderOperation($order));

        return response()->json(['message'=>'updated', 'data'=>$order],200);
    }

     /**
      * @group Integration API
      * Delete an Order
      *  use this API to delete an order programmatically from Pudo.
      * @bodyParam  api_id string required your API ID Example: GZUdkhoBCB28zVZRdljnwMUs67S2kNz821r4yKX3QzUWLnvWEM8tIlulfU4UMkHY.
      * @bodyParam  code  string required The code of the order to be the same on your system Example: 342334.
      * */
    public function delete(Request $request){

        $validatedData = $request->validate([
            'code' => 'required|min:1|max:32',
        ]);

        $user = $request->client;

      Order::where('user_id',$user->id)->where('code',$request->get('code'))->delete();

        return response()->json(['message'=>'deleted', 'data'=>[]],200);
    }

    /**
     * @group Integration API
     * Assign Order to a driver
     *  this api to assign and order already existing on Pudo to a driver
     * @bodyParam  api_id string required your API ID Example: GZUdkhoBCB28zVZRdljnwMUs67S2kNz821r4yKX3QzUWLnvWEM8tIlulfU4UMkHY.
     * @bodyParam  code  string required The code of the order to be the same on your system Example: 342334.
     * @bodyParam  driver_code required The code of the driver Example: 65435.
     * */
    public function assignToDriver(Request $request){
        $validatedData = $request->validate([
            'code' => 'required|min:1|max:32',
            'driver_code' => 'required|min:1|max:32',
        ]);
        $user = $request->client;
        $order = Order::where('user_id',$user->id)->where('code',$request->get('code'))->first();
        $fleet = Fleet::where('code',$request->get('driver_code'))->first();
        if ($order->fllet_id != null){
            return response()->json(['message'=>'the order already assigned to a driver','error'=>true],400);
        }
        $order->fleet_id = $fleet->id;
        $order->order_status_id = AOrderStatus::ASSIGNED_TO_DRIVER;
        $order->save();

        $order->status;

        event(new OrderAssigned($order));
        event(new OrderOperation($order));

        return response()->json(['message'=>'assigned', 'data'=>$order],200);
    }


    /**
     * @group Integration API
     * Reassign Order to another Driver
     *  this api to reassign and order already existing on Pudo and assigned to a driver to another driver
     * @bodyParam  api_id string required your API ID Example: GZUdkhoBCB28zVZRdljnwMUs67S2kNz821r4yKX3QzUWLnvWEM8tIlulfU4UMkHY.
     * @bodyParam  code  string required The code of the order to be the same on your system Example: 342334.
     * @bodyParam  driver_code required The code of the driver Example: 65435.
     * */
    public function reassignToDriver(Request $request){
        $validatedData = $request->validate([
            'code' => 'required|min:1|max:32',
            'driver_code' => 'required|min:1|max:32',
        ]);
        $user = $request->client;
        $order = Order::where('user_id',$user->id)->where('code',$request->get('code'))->first();
        $fleet = Fleet::where('code',$request->get('driver_code'))->first();
        $order->fleet_id = $fleet->id;
        $order->order_status_id = AOrderStatus::ASSIGNED_TO_DRIVER;
        $order->save();
        $order->status;
        event(new OrderAssigned($order));
        event(new OrderOperation($order));
        return response()->json(['message'=>'assigned', 'data'=>$order],200);
    }
}
