<?php

namespace App\Http\Controllers\Driver;


use App\Device;
use App\Enums\AOrderStatus;
use App\Events\AgentEvent;
use App\Events\DriverAccepted;
use App\Events\LocationNow;
use App\Events\OrderOperation;
use App\Events\OrderStatusChanged;
use App\Fleet;
use App\FleetFile;
use App\Http\Controllers\Controller;
use App\Invoice;
use App\Order;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use App\Rules\AgeValidationRule;
use Tymon\JWTAuth\Facades\JWTAuth;

class DriverController extends Controller
{
    /************New Edition ********/
    /**
     * @group  Driver Mobile API
     * Driver register
     * use this api to register a driver by mobile and password
     * @bodyParam  mobile string required the Driver mobile Example: 1234567890
     * @bodyParam  email string required the Driver password Example: example@example.com
     * @bodyParam  password string required the Driver password Example: 123456
     */


    public function register(Request $request)
    {

        try {

            $validator = Validator::make($request->all(), [  //validate inputs
                "mobile" => 'required|unique:fleets|numeric|min:10',
                "name" => 'required|min:6',
                "identity" => 'required|unique:fleets|min:10',
                "nationality" => 'required',
                "age" => ['required','numeric',new AgeValidationRule()],
                "nationalityId" => 'numeric',
                "contract_type"=>"required",
                "image1"=>"required",
                "image2"=>"required",
                "country"=>"required",
                "company_id"=>"required",
                "gender"=>"required",
                "vehicle_type"=>"required",
//                 "date_of_birth"=>"required",
            ]);

            if ($validator->fails()) {  // in case validator failed
                return response()->json(['status' => false, 'message' => 'required inputs', 'data' => $validator->errors()], 400);
            }
            $code = rand('999999', '111111');
            $maxCode = Fleet::max('code');
            $fleet = new Fleet();
            $fleet->code = intval($maxCode) + 1;
            $fleet->mobile = $request->mobile;
            $fleet->name = $request->name;
            $fleet->application_status_id = 1;
            $fleet->user_id = $request->company_id;
            $fleet->active = 0;
//            $fleet->date_of_birth = date("m-d-Y", strtotime($request->date_of_birth));
            $fleet->gender = $request->gender;
            $fleet->country = $request->country;
            $fleet->nationality = $request->nationality;
            $fleet->age = $request->age;
            $fleet->bank_name = $request->bank_name;
            $fleet->vehicle_type = $request->vehicle_type;
            $fleet->contract_type = $request->contract_type;
            $fleet->verification_code = $code;

            //==========================   Create serial unique Numbers ==========================

            $chars = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            $serial = '';
            $max = count($chars) - 1;
            for ($i = 0; $i < 40; $i++) {
                $serial .= (!($i % 5) && $i ? '-' : '') . $chars[rand(0, $max)];
            }

            $chars2 = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
            $serial2 = '';
            $max2 = count($chars2) - 1;
            for ($i = 0; $i < 40; $i++) {
                $serial2 .= (!($i % 5) && $i ? '-' : '') . $chars[rand(0, $max2)];
            }

            //========================== end  Create serial unique Numbers ==========================
            $fleet->uuid = $serial;
            $fleet->supplier_uuid = $serial2;
            $fleet->identity = $request->identity;
            $fleet->status = 'offline';
            $fleet->password = Hash::make($request->password);
            $images = [];
            $fleet_saved = $fleet->save();
            if ($fleet_saved) {
                $data[]=$request->image1;
                array_push($data,$request->image2);
                foreach ($data as $image) {
                    $file  = new FleetFile();
                    $file->fleet_id = $fleet->id;

                    $file->file_path = $this->Uploads($image);
                    if ($file->save()) {
                        array_push($images, $file->file_path);
                    }
                    // $fleet->delete();
                }
                // ============================== Integration with api ===========================
                if($images==[]){
                    $fleet->delete();
                    return response()->json(['status' => false, 'message' => 'failed'],400);
                }else {

                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, "https://www.msegat.com/gw/sendsms.php");
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
                    curl_setopt($ch, CURLOPT_HEADER, TRUE);

                    curl_setopt($ch, CURLOPT_POST, TRUE);

                    $fields = <<<EOT
                            {
                              "userName": "pudo",
                              "numbers": $request->mobile,
                              "userSender": "PUDO",
                              "apiKey": "81996d9f14eec357f3fe63280ac6e47f",
                              "msg": "Your Verification Code is : $code" ,
                              "msgEncoding":"UTF8"
                            }
                            EOT;
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);

                    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                        "Content-Type: application/json"
                    ));

                    $response = curl_exec($ch);
                    $info = curl_getinfo($ch);
                    curl_close($ch);
                }
                // ============================== end Integration with api ===========================
            }
            $fleet['images'] = $images;
            return response()->json(['status' => true, 'message' => 'success', 'data' => $fleet]);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }
    /**
     * @group  Driver Mobile API
     * Driver verification
     * use this api to register a driver by mobile and password
     * @bodyParam  id string required the Driver id Example: 1
     * @bodyParam  code string required the Driver verification_code Example: 123456
     */
    public function verification(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [  //validate inputs
                'id' => 'required',
                'code' => 'required',

            ]);
            if ($validator->fails()) {  // in case validator failed
                return response()->json(['status' => false, 'message' => 'failed', 'data' => $validator->errors()], 400);
            }
            $fleet = Fleet::findOrFail($request->id);
            if ($fleet->verification_code != $request->code) {
                return response()->json(['status' => false, 'message' => 'failed', 'data' => 'Code is wrong']);
            }

            $token = JWTAuth::fromUser($fleet);
            $fleet->update(['active' => 1]);
            $fleet->save();
            $fleet->status == 'online' ? $fleet->status = 1 : $fleet->status = 0;

            return response()->json(['status' => true,  'message' => 'success', 'data' => ['fleet' => $fleet, 'token' => $token]]);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }
    /**
     * @group  Driver Mobile API
     * Companies
     * use this api to git all Companies
     */
    public function companies()
    {

        try {
            $company = User::select('id', 'company_name')->where('menuroles', 'user')->where('status', 'Active')->get();

            return response()->json(['status' => true, 'message' => 'success', 'data' => $company], 200);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }

    public function profile()
    {
        $fleet = auth('fleet')->user();
        $fleet->status == 'online' ? $fleet->status = 1 : $fleet->status = 0;
        $files = $fleet->files;
        return response()->json(['message' => 'success', 'data' => ['fleet' => $fleet]]);
    }

    public function editProfile(Request $request)
    {

        try {
            $validator = Validator::make($request->all(), [  //validate inputs
                "mobile" => 'numeric|min:14',
                "bank_iban" => 'numeric',
                "name" => 'min:6',
                "identity" => 'min:10|max:15',
                "age" => ['numeric'],
                "nationalityId" => 'numeric',
            ]);
            if ($validator->fails()) {  // in case validator failed
                return response()->json(['status' => true, 'message' => 'failed', 'data' => $validator->errors()], 400);
            }

            $fleet = auth('fleet')->user();
            $fleet->update($request->all());
            $fleet->status == 'online' ? $fleet->status = 1 : $fleet->status = 0;
            return response()->json(['status' => true, 'message' => 'success', 'data' => $fleet]);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }

    public function Uploads($imageFile)
    {
        $image = $imageFile;
        $ext = $imageFile->getClientOriginalExtension();
        $path = '/fleets';
        $rand = rand(1, 999999);
        $date = Date('ymdhis');
        $image_name = $rand . $date . '.' . $ext;
        $filePathLarge = Image::make($image->getRealPath())->resize(1000, 1000, function ($constraint) {
            $constraint->aspectRatio();
        });
        $filePathLargeResource = $filePathLarge->stream()->detach();
        $s3 = Storage::disk('s3');
        $s3->put($path . '/' . $image_name, $filePathLargeResource, 'public');
        return $image_name;
    }
    public function uploadFiles(Request $request)
    {
        try {
            $fleet = auth('fleet')->user();
            $file  = new FleetFile();
            $file->fleet_id = $fleet->id;
            $file->file_path = $this->Uploads($request->file('files'));
            $file->save();
            return response()->json(['message' => 'success', 'data' => $file]);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }
    public function uploadInvoice(Request $request)
    {
        try {
            $file  = new Invoice();
            $file->order_id = $request->orderId;
            $file->file_path = $this->Uploads($request->file('invoice'));
            $file->save();
            return response()->json(['message' => 'success', 'data' => $file,'status'=>true]);
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
    }
    /************ End New Edition ********/


    /**
     * @group  Driver Mobile API
     * Driver Login
     * use this api to login a driver by mobile and password
     * will generate jwt token you can use it in Authrization header with prefixed with Bearer
     *
     * @bodyParam  mobile string required the Driver mobile Example: 1234567890
     * @bodyParam  password string required the Driver password Example: 123456
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [  //validate inputs
            'mobile' => 'required',
            'password' => 'required|min:2'
        ]);
        if ($validator->fails()) {  // in case validator failed
            return response()->json(['status' => false, 'message' => 'required inputs', 'data' => $validator->errors()], 400);
        }
        $credentials = $request->only('mobile', 'password');
        $token = null;


        try {
            //
            if (!$token = auth('fleet')->attempt($credentials)) {

                return response()->json(['status' => false, 'message' => 'failed', 'data' => 'mobile or password wrong'], 422);
            }
        } catch (\Exception  $e) {
            return response()->json([$e->getMessage()], 500);
        }
        $fleet = auth('fleet')->user();

        if ($fleet->active == 0) {
            $fleet->status == 'online' ? $fleet->status = 1 : $fleet->status = 0;

            return response()->json(['status' => true, 'message' => 'not active', 'data' => ['token' => $token, 'fleet' => $fleet]], 200);
        }

        if ($fleet->block == 1) {
            return response()->json(['status' => false, 'message' => 'blocked'], 500);
        }
        $fleet->last_login = date('Y-m-d h:i:s');
        $fleet->status = 'online';
        $fleet->device_token = $request->device_token;
        $fleet->save();
       $fleet->status == 'online' ? $fleet->status = 1 : $fleet->status = 0;


        return response()->json(['status' => true, 'message' => 'success', 'data' => ['token' => $token, 'fleet' => $fleet]], 200);
    }


    /**
     * @group  Driver Mobile API
     * Refresh Token
     * use this api to refresh Auth token*
     *
     */
    public function refreshToken(Request $request)
    {
        try {
            $token = JWTAuth::refresh(str_replace('Bearer ', '', $request->header('Authorization')));
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

        return response()->json(['message' => null, 'data' => ['token' => $token]], 200);
    }

    /**
     * @group  Driver Mobile API
     * online status
     * use this api to refresh Auth token*
     * @bodyParam  status string required current status Example: 1 | 0.
     *
     */
    public function onlineStatus(Request $request)
    {
        if ($request->get('status') == 1) {
            $status = 'online';
        } else {
            $status = 'offline';
        }
        $fleet = auth('fleet')->user();
        $fleet->status = $status;
        $fleet->save();
        return response()->json(['status' => true, 'message' => 'success', 'data' => $fleet], 200);
    }


    /**
     * @group  Driver Mobile API
     * Orders
     * this api will return the list of orders in process
     *
     *
     */
    public function orders(Request $request)
    {
        $fleet = auth('fleet')->user();
        $orders = Order::with('user')->where('fleet_id', $fleet->id)
            ->whereIn('order_status_id', [
                AOrderStatus::ASSIGNED_TO_DRIVER,
                AOrderStatus::DRIVER_ACCEPTED,
                AOrderStatus::TO_BE_PICKED_UP,
                AOrderStatus::TO_BE_DELIVERED,
                AOrderStatus::PICKED_UP
            ])
            ->get();
        return response()->json(['status' => true, 'message' => 'success', 'data' => $orders]);
    }




    /**
     * new version
     *
     * @group  Driver Mobile API
     * Orders
     * this api will return the list of orders in process
     *
     *
     */
    public function newOrders(Request $request)
    {
        $fleet = auth('fleet')->user();
        $orders = Order::with('user')->whereIn('order_status_id', [
            AOrderStatus::NEW_ORDER,
        ])
            ->get();


        return response()->json(['status' => true, 'message' => 'success', 'data' => $orders]);
    }


    /**
     * @group  Driver Mobile API
     * OrderHistory
     * this api will return the list of orders finished its process
     *
     */
    public function ordersHistory(Request $request)
    {
        $fleet = auth('fleet')->user();
        $orders = Order::with('user')->where('fleet_id', $fleet->id)
            ->whereIn('order_status_id', [
                AOrderStatus::DELIVERED,
                AOrderStatus::RETURNED,
                AOrderStatus::FAILED_TO_RETURN,
                AOrderStatus::CANCELED
            ])->paginate(20);
        return response()->json(['message' => 'success', 'data' => $orders]);
    }


    public function getOrdersHistory(Request $request)
    {
        $fleet = auth('fleet')->user();
        $status = $request->status;
        if ($status == 'new') {
            $orders = Order::with('invoice','user')->where('created_at', 'LIKE', '%' . $request->date . '%')
                ->whereIn('order_status_id', [
                    AOrderStatus::NEW_ORDER
                ])->paginate(10);
            return response()->json(['status' => true, 'message' => 'success', 'data' => $orders]);
        } else if ($status == 'completed') {
            $orders = Order::with('invoice','user')->where([
                'fleet_id' => $fleet->id,
            ])->where('created_at', 'LIKE', '%' . $request->date . '%')
                ->whereIn('order_status_id', [
                    AOrderStatus::RETURNED,
                    AOrderStatus::DELIVERED,
                    AOrderStatus::FAILED_TO_RETURN,
                    AOrderStatus::CANCELED
                ])->paginate(10);
            return response()->json(['status' => true, 'message' => 'success', 'data' => $orders]);
        } else if ($status == 'progress') {
            $orders = Order::with('invoice','user')->where([
                'fleet_id' => $fleet->id,
            ])->where('created_at', 'LIKE', '%' . $request->date . '%')
                ->whereIn('order_status_id', [
                    AOrderStatus::DRIVER_ACCEPTED,
                    AOrderStatus::PICKED_UP,
                    AOrderStatus::TO_BE_PICKED_UP
                ])->paginate(10);
            return response()->json(['status' => true, 'message' => 'success', 'data' => $orders]);
        }

        return response()->json(['status' => true, 'message' => 'success', 'data' => []]);
    }


    /**
     * @group  Driver Mobile API
     * Get an order details
     * this api will return the object of order details with products list
     * send order_id as id parameter
     * @urlParam id int required
     */
    public function order($id)
    {
        $order = Order::where('id', $id)->with('products')->first();
        return response()->json(['status' => true, 'message' => 'succefully', 'data' => $order]);
    }

    /**
     * @group  Driver Mobile API
     * Accept an order
     * use this api to make a driver accept an order
     * send order_id as id parameter
     * @urlParam id int required
     * @return \Illuminate\Http\JsonResponse
     */
    public function acceptOrder($id)
    {
        $fleet = auth('fleet')->user();
        $order = Order::where('id', $id)->with('products')->first();

        if ($order->order_status_id == AOrderStatus::DRIVER_ACCEPTED) {
            return response()->json(['status' => false, 'message' => 'the order accepted by another driver ']);
        }
        $order->order_status_id = AOrderStatus::DRIVER_ACCEPTED;
        $order->fleet_id = $fleet->id;
        $order->save();
        $order->status;
        $order->user;

         event(new DriverAccepted($order->id, $order->fleet_id));
         event(new OrderOperation($order));
         event(new AgentEvent($order));
        return response()->json(['status' => true, 'message' => 'succefully', 'data' => $order]);
    }


    /**
     * @group  Driver Mobile API
     * Reject an order
     * use this api to make a driver accept an Reject
     * send order_id as id parameter
     * @urlParam id int required
     */
    public function rejectOrder($id)
    {
        $fleet = auth('fleet')->user();
        $order = Order::where('id', $id)->with('products')->first();
        $order->order_status_id = AOrderStatus::DRIVER_REJECTED;
        $order->fleet_id = $fleet->id;
        //$order->save();
        $order->status;
        $order->user;
        event(new OrderOperation($order));
        event(new AgentEvent($order));
        return response()->json(['status' => true, 'message' => 'succefully', 'data' => $order]);
    }

    /**
     * @group  Driver Mobile API
     * Change order status
     * use this api to Change an order status
     * send order_id as id parameter
     * @urlParam id int required
     */
    public function changeStatus($id, Request $request)
    {
        $order = Order::where('id', $id)->with('products')->first();
        $order->order_status_id = $request->get('order_status_id');
        if ($request->get('order_status_id') == AOrderStatus::PICKED_UP) {
            $order->picked_up_at = date('Y-m-d h:i:s');
        } elseif ($request->get('order_status_id') == AOrderStatus::DELIVERED) {
            $order->delivered_at =  date('Y-m-d h:i:s');
            //total_price
            $fleet = auth('fleet')->user();
            $balance = $fleet->depositFloat($order->total_price);
        }
        $order->save();
        $order->status;
        $order->user;

        event(new OrderStatusChanged($order->code, $order->status->id));
         event(new OrderOperation($order));
        event(new AgentEvent($order));
        return response()->json(['status' => true, 'message' => 'succefully', 'data' => $order]);
    }


    /**
     * @group  Driver Mobile API
     * Install Notification Device
     *
     * @bodylParam os string required the operating system Example: Android
     * @bodylParam player_id string required the player_id Example: dasbajsfsdhavgfvfhsbdcdg
     *
     */
    public function installNoteDevice(Request $request)
    {
        $user  = auth('fleet')->user();
        $device = Device::updateOrCreate(
            ['player_id' => $request->get('player_id')],
            [
                'os' => $request->get('os'),
                'user_type' => 'Fleet',
                'player_id' => $request->get('player_id'),
                'user_id' => $user->id

            ]
        );

        return response()->json(['message' => null, 'data' => $device]);
    }


    /**
     * @group  Driver Mobile API
     * location now
     * @bodylParam  lng string required the longitude Example: 21.234546654
     * @bodylParam  lat string required the latitude Example: 24.234546654
     */
    public function locationNow(Request $request)
    {
        $inputs = $request->all();
        $user = auth('fleet')->user();
        if($inputs["precent"]==0){
            $inputs["precent"]=90;
        }
        Fleet::where("id", $user->id)->update(["lat" => $inputs["lat"], "lng" => $inputs["lng"],"tank" => $inputs["precent"]]);
        $inputs["user"] = $user;
        $inputs["user"]["orders_count"] =  $user->orders()->whereNotIn(
            'order_status_id',
            [AOrderStatus::DELIVERED, AOrderStatus::CANCELED, AOrderStatus::RETURNED, AOrderStatus::FAILED_TO_RETURN]
        )
            ->count();

        event(new LocationNow($inputs));

        return response()->json(['message' => 'Successfully Sent Location']);
    }

    /**
     * @group  Driver Mobile API
     * Wallet
     */

    public function wallet()
    {
        $fleet  = auth('fleet')->user();
        try {
            $balance = $fleet->balanceFloat;
            $transactions = $fleet->transactions()->orderBy('created_at', 'DESC')->paginate(20);
            foreach ($transactions as $transaction) {
                $transaction->amount = $transaction->amount / 100;
            }
            $wallet['balance'] = $balance;
            $wallet['transactions'] = $transactions;

            return response()->json(['status' => true, 'data' => $wallet], 200);
        } catch (\Exception $exception) {
            return response()->json(['status' => false, 'message' => $exception->getMessage(), 'data' => []], 500);
        }
    }

    /**
     * @group  Driver Mobile API
     * Wallet transfer
     * @bodyParam mobile string required the recipient fleet Example: 05452343254
     * @bodyParam amount int required the the amount he want to transfer Example: 20
     */

    public function walletPay(Request $request)
    {
        $fleet  = auth('fleet')->user();

        try {
            $fleet->deposit( intval($request->get("amount")) * 100 ,  ["description" => " payment_id (".$request->payment_id .')']);
            $balance = $fleet->balanceFloat;
            $wallet['balance'] = $balance;

            return response()->json(['status' => true, 'data' => $wallet], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'status' => false, 'data' => []], 500);
        }
    }
    public function walletTransfer(Request $request)
    {
        $fleet  = auth('fleet')->user();
      //  $another = Fleet::where("mobile", $request->get('mobile'))->first();
        try {

                $fleet->transfer(
                    intval($request->get("amount")) * 100,
                    ["description" => 'transfer from ' . $fleet->name ]
                );


            $balance = $fleet->balanceFloat;
            $transactions = $fleet->transactions()->orderBy('created_at', 'DESC')->paginate(20);
            foreach ($transactions as $transaction) {
                $transaction->amount = $transaction->amount / 100;
            }
            $wallet['balance'] = $balance;
            $wallet['transactions'] = $transactions;

            return response()->json(['status' => true, 'data' => $wallet], 200);
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'status' => false, 'data' => []], 500);
        }
    }
}
