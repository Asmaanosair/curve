<?php

namespace App\Http\Controllers;

use App\Client;
use App\Commission;
use App\Enums\AOrderStatus;
use App\Events\AgentEvent;
use App\Events\NewOrder;
use App\Events\OrderAssigned;
use App\Events\OrderOperation;
use App\Fleet;
use App\Helper;
use App\Http\Controllers\Driver\FCMController;
use App\Order;
use App\OrderStatus;
use App\Products;
use App\User;
use Bavix\Wallet\Interfaces\Product;
use Carbon\Carbon;
use Importer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function create()
    {
        $clients= User::all()->whereIn('menuroles',['client']);
        $user = auth('api')->user();
        return response()->json(compact('clients', 'user'));
    }
    public function currentOrders(Request $request)
    {


        $user = auth()->user();
        $query = Order::with('status');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }


        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key ,'LIKE', '%' . $value. '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'delivery_time' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $query->with('user');
        //        ->select('id','code','user_id', 'fleet_id','customer_name','customer_mobile','number_of_products','total_price', 'delivery_time','order_status_id')
        $currentOrders =  $query->paginate($request->get('itemsLimit'));



        return response()->json(compact('currentOrders'));
    }
    public function issueOrders(Request $request)
    {


        $user = auth()->user();
        $query = Order::with('status');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }
        $cat = OrderStatus::select('id')->where('category_id', 2)->get();
        $catID = [];
        foreach ($cat as $test) {
            array_push($catID, $test->id);
        }
        $query->whereIn(
            'order_status_id',
            $catID
        );

        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key ,'LIKE', '%' . $value. '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'delivery_time' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $query->with('user');
        //        ->select('id','code','user_id', 'fleet_id','customer_name','customer_mobile','number_of_products','total_price', 'delivery_time','order_status_id')
        $issueOrders =  $query->paginate($request->get('itemsLimit'));



        return response()->json(compact('issueOrders'));
    }
    public function progressOrder(Request $request)
    {
        $user = auth()->user();
        $query = Order::with('status');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }
        $cat = OrderStatus::select('id')->where('category_id', 3)->get();
        $catID = [];
        foreach ($cat as $test) {
            array_push($catID, $test->id);
        }
        $query->whereIn(
            'order_status_id',
            $catID
        );

        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key ,'LIKE', '%' . $value. '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'delivery_time' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $query->with('user');
        //        ->select('id','code','user_id', 'fleet_id','customer_name','customer_mobile','number_of_products','total_price', 'delivery_time','order_status_id')
        $progressOrders =  $query->paginate($request->get('itemsLimit'));

        return response()->json(compact('progressOrders'));
    }


    public function previousOrder(Request $request)
    {
        $user = auth()->user();
        $query = Order::with('status');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }
        $cat = OrderStatus::select('id')->where('category_id', 1)->get();
        $catID = [];
        foreach ($cat as $test) {
            array_push($catID, $test->id);
        }
        $query->whereIn(
            'order_status_id',
            $catID
        );
        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key ,'LIKE', '%' . $value. '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'delivery_time' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $query->with('user');
        $previousOrders =  $query->paginate($request->get('itemsLimit'));

        return response()->json(compact('previousOrders'));
    }

    public function allStatuses()
    {
        $statuses = OrderStatus::all();
        $user = auth('api')->user();
        return response()->json(compact('statuses', 'user'));
    }

    public function changeStatus($orderId, Request $request)
    {
        $query = Order::where('id', $orderId);
        $query->update(["order_status_id" => $request->get('status_id')]);
        $order = $query->first();

        $order->user;
        $order->status;
        event(new OrderOperation($order));
        event(new AgentEvent($order));
        return response()->json(compact('order'));
    }

    public function show($id)
    {
        $order = Order::with('products')
            ->with('status')
            ->with('fleet')
            ->with('invoice')
            ->where('id', $id)->first();
        return response()->json(compact('order'));
    }

    public function assignToDriver(Request $request)
    {
        $validatedData = $request->validate([
            'order_id' => 'required|min:1|max:32',
            'fleet_id' => 'required|min:1|max:32',
        ]);
        $user = auth()->user();
        $query = Order::query();

        $fleet = Fleet::where('id', $request->get('fleet_id'))->first();
        //        if ($order->fllet_id != null){
        //            return response()->json(['message'=>'the order already assigned to a driver','error'=>true],400);
        //        }
        if (!$user->hasRole('admin')) {
            $query->where('user_id', $user->id);
        }
        $order = $query->where('id', $request->get('order_id'))->first();
        $order->fleet_id = $request->get('fleet_id');
        $order->order_status_id = AOrderStatus::ASSIGNED_TO_DRIVER;
        $order->save();

        $order->status;
        $order->user;
        event(new OrderAssigned($order));
        event(new AgentEvent($order));
        event(new OrderOperation($order));
        return response()->json(compact('order', 'fleet'));
    }

    public function reassignToDriver(Request $request)
    {
        $validatedData = $request->validate([
            'order_id' => 'required|min:1|max:32',
            'fleet_id' => 'required|min:1|max:32',
        ]);
        $user = $request->client;
        $order = Order::where('user_id', $user->id)->where('code', $request->get('code'))->first();
        $fleet = Fleet::where('code', $request->get('driver_code'))->first();
        $order->fleet_id = $fleet->id;
        $order->order_status_id = AOrderStatus::ASSIGNED_TO_DRIVER;
        $order->save();

        $order->user;
        $order->status;
        event(new OrderAssigned($order));
        event(new AgentEvent($order));
        // event(new OrderOperation($order));
        return response()->json(compact('order', 'fleet'));
    }


    public function importExcel(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'file' => 'required|max:5000|mimes:xlsx,xls,csv'
        ]);
        if (!$validator->fails()) {
            $file = $request->file('file');
            $excel = Importer::make('Excel');
            $excel->Load($file);
            $collection = $excel->getCollection();



            for ($row = 1; $row < sizeof($collection); $row++) {
                try {
                    $main_inputs = [];
                    $inputs_text = $collection[0];
                    $inputs_value = $collection[$row];
                    for ($j = 0; $j < sizeof($collection[0]); $j++) {
                        $main_inputs[trim($inputs_text[$j])] = $inputs_value[$j];
                    }

                    $validation_inputs = Validator::make($main_inputs, [
                        'customer_name' => 'required',
                        'customer_mobile' => 'required',
                        'code' => 'required',
                        'order_price' => 'required',
                        'discount' => 'required',
                        'delivery_time' => 'required',
                        'pick_up_lat' => 'required',

                        'pick_up_lng' => 'required',
                        'delivery_lat' => 'required',
                        'delivery_lng' => 'required',
                        'number_of_products' => 'required'

                    ]);


                    if ($validation_inputs->fails()) {
                        $errors = $validation_inputs->errors();
                        return view('errors', ['my_errors' => $errors]);
                    }

                    $user =  auth()->user();


                    $latFrom = $main_inputs['pick_up_lat'];
                    $lonFrom = $main_inputs['pick_up_lng'];
                    $latTo = $main_inputs['delivery_lat'];
                    $lonTo = $main_inputs['delivery_lng'];
                    $result = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading=90:" . $latFrom . "," . $lonFrom . "&destinations=" . $latTo  . "," . $lonTo . "&key=AIzaSyBXmoeF765Ussy8TQ6OWDMHPA_26aQDQl0")->json();
                    if ($result["status"] == "OK") {
                        $kilos_count = $result["rows"][0]["elements"][0]["distance"]["value"] / 1000;
                        $main_inputs['kilos_count'] = $kilos_count;

                        $fees_id = $user->commission_id;
                        $fees = Commission::find($fees_id);

                        if ($fees->type == 1) {
                            $kilos_total_price =  $fees->price * $main_inputs['kilos_count'];
                            $main_inputs['kilos_total_price'] = substr($kilos_total_price, 0, 4);
                        } else {
                            $main_inputs['kilos_total_price'] = $fees->price;
                        }


                        $main_inputs['deliver_fees'] =  $main_inputs['kilos_total_price'];


                        $main_inputs['user_id'] = $user->id;
                        $main_inputs['order_status_id'] = 1;

                        $main_inputs['total_price'] = ($main_inputs['order_price'] - $main_inputs['discount']) + $main_inputs['deliver_fees'];

                        Order::create($main_inputs);
                    }
                } catch (\Exception $e) {
                    return $e->getMessage();
                }
            }
            return redirect('/#/orders'); {
            }
            // } else {
            //     return view('errors', ['size_error' => 'The number of inputs you entered does not match the allowed number']);
            // }
        } else {
            return redirect()->back()->with(['errors' => $validator->errors()->all()]);
        }
    }

    public function createOrder(Request $request)
    {
        $user = auth('api')->user();
        $client=[];
        if($user->menuroles!=='client'&& $user->menuroles!=='client-branch'){
            $client=['required'];
        }
        $validator = Validator::make($request->all(), [  //validate inputs

            "customer_name" => 'required',
            "customer_mobile" => 'required',
            "order_price" => 'required|numeric',
            "payment_method" => 'required',
            "timeNow" => 'required',
            "client_id" => $client,
            "delivery_time" => 'required|date|after_or_equal:now|date_format:m/d/Y H:i',
            "pick_up_lat" => 'required',
            "pick_up_lng" => 'required',
            "delivery_lng" => 'required',
            "delivery_lat" => 'required',

        ]);

        if ($validator->fails()) {
            // in case validator failed

            return response()->json([ 'message' => $validator->errors()], 500);
        }
        $TimeNow=Carbon::parse($request->timeNow)->format('m/d/Y H:i');

        $Delivery_time=Carbon::parse($request->delivery_time)->format('m/d/Y H:i');
        if ($TimeNow>=$Delivery_time) {  // in case validator failed
            return response()->json( ['message'=>['time'=>['the Delivery Time is not correct']]], 500);
        }
        $inputs = $request->all();
        $result = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading=90:" . $request->pick_up_lat . "," . $request->pick_up_lng . "&destinations=" . $request->delivery_lat . "," . $request->delivery_lng . "&key=AIzaSyAJhqpSuRhbNnIMU1qCnhBKgiYuuS5yypg")->json();
        if ($result["status"] == "OK") {
            $kilos_count = $result["rows"][0]["elements"][0]["distance"]["value"] / 1000;

            $inputs['kilos_count'] = $kilos_count;
            $client_id=$request->client_id;
//            // $products = json_decode($request->products);
            if($user->menuroles=='client'){
                $client_id = $user->id;
            }elseif ($user->menuroles=='client-branch'){
                $client_id = Client::where('admin_id',$user->id)->first()->user_id;

            }
            $inputs['user_id']= $client_id;
            $client=User::find($client_id);
            $fees_id = $client->commission_id;
            $fees = Commission::find($fees_id);

            if ($fees->type == 1) {
                $kilos_total_price =  $fees->price * $inputs['kilos_count'];
                $inputs['kilos_total_price'] = substr($kilos_total_price, 0, 4);
            } else {
                $inputs['kilos_total_price'] = $fees->price;
            }


            $inputs['deliver_fees'] =  $inputs['kilos_total_price'];

            $inputs['total_price'] +=  $inputs['deliver_fees'];


            $inputs['order_status_id'] = 1;
            $inputs['code'] = rand(0,999999);
            $order = Order::create($inputs);

            $order->status;
            $order->user;

             $fcm = new FCMController();

             $fcm->assignOrder($order->id, $request->pick_up_lat, $request->pick_up_lng, 6);
             event(new OrderOperation($order));

            return response()->json(['message' => 'created', 'data' => $order], 200);
        }else{
            return response()->json( ['message'=>['apiKey'=>['the error in api key']]], 500);
        }
    }

    public function editOrder($id)
    {

        $order = Order::find($id);

        $order->products;

        return response()->json(['message' => 'created', 'data' => $order], 200);
    }

    public function updateOrder(Request $request, $id)
    {

        $inputs = $request->all();
        $result = Http::get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=heading=90:" . $request->pick_up_lat . "," . $request->pick_up_lng . "&destinations=" . $request->delivery_lat . "," . $request->delivery_lng . "&key=AIzaSyBXmoeF765Ussy8TQ6OWDMHPA_26aQDQl0")->json();
        $inputs = $request->all();
        if ($result["status"] == "OK") {
            $kilos_count = $result["rows"][0]["elements"][0]["distance"]["value"] / 1000;
            $inputs['kilos_count'] = $kilos_count;

            $order = Order::find($id);
            $user =  auth()->user();

            $fees_id = $user->commission_id;
            $fees = Commission::find($fees_id);

            if ($fees->type == 1) {
                $kilos_total_price =  $fees->price * $inputs['kilos_count'];
                $inputs['kilos_total_price'] = substr($kilos_total_price, 0, 4);
            } else {
                $inputs['kilos_total_price'] = $fees->price;
            }



            $inputs['deliver_fees'] =  $inputs['kilos_total_price'];

            $inputs['total_price'] +=  $inputs['deliver_fees'];


            $order->update($inputs);



            // $old_products = Products::where('order_id', $id)->get();

            // foreach ($old_products as $old_product) {
            //     $old_product->delete();
            // }

            // $products = json_decode($request->products);
            // if ($products) {
            //     foreach ($products as $product) {
            //         $product = (array) $product;
            //         $product['order_id'] = $order->id;
            //         Products::create($product);
            //     }
            // }

            return response()->json(['message' => 'created', 'data' => $order], 200);
        }
    }

    public function allOrders()
    {

        $orders = Order::all();

        return response()->json(['message' => 'created', 'data' => $orders], 200);
    }

    public function removeOrder($id)
    {

        $order = Order::find($id);
        $order->delete();
        $products = Products::where('order_id', $id)->get();
        foreach ($products as $product) {
            $product->delete();
        }
        return response()->json(['message' => 'created', 'data' => 'success remove'], 200);
    }
}




