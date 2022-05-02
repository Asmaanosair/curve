<?php

namespace App\Http\Controllers\Driver;

use App\Enums\DriverApply;
use App\Events\NewOrder;
use App\Fleet;
use App\Http\Controllers\Controller;
use App\Notification;
use App\Notifications\OrderNotification;
use App\Order;
use Illuminate\Http\Request;
use DB;

class FCMController extends Controller
{
    public function saveToken(Request $request)
    {
        auth('fleet')->user()->update(['device_token'=>$request->device_token]);
        return response()->json([
            'code' => '1',
            'status' => 'success',

        ], 200);
    }

    public function sendNotification($token_id ,$body ,$title)
    {

        $registration_ids =$token_id;
        $url = 'https://fcm.googleapis.com/fcm/send';
        $fields = array(
            'registration_ids' => $registration_ids,
            'notification' => array("body" => $body,'title'=>$title,'sound' => 'default' )
        );
        $fields = json_encode($fields);
        $headers = array(
            'Authorization: key=' . "AAAA2i3yv1g:APA91bFVkK2WwuvBX42t0eHJXtdi16xuN2HYec3jBQD3dO0PwPqYy3rLOu12pAHTmjWBgND1ZA9uM5omS2s2ncy6rRUAZtnpIP_AB1JHgD_r9JoHzOuiYIMsqgGsYvM68rk9dYlQ9wpp",
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        $result = curl_exec($ch);
        curl_close($ch);
        // echo  $result;
//        dd($result);

        return $result;

    }
    public function distance($lat,$lng,$distance)
    {
        $fleets = DB::table('fleets')
            ->whereNotNull('device_token')
            ->selectRaw("id, lat, lng ,device_token,
                     ( 6371 * acos( cos( radians(?) ) *
                       cos( radians( lat ) )
                       * cos( radians( lng ) - radians(?)
                       ) + sin( radians(?) ) *
                       sin( radians( lat ) ) )
                      ) AS distance", [$lat, $lng, $lat])
            ->where('active', '=', 1)
            ->where('status', '=', 'online')
            ->where('application_status_id', '=', DriverApply::APPROVED_BY_PUDO)
            ->havingRaw("( 6371 * acos( cos( radians($lat) ) *
                       cos( radians( lat ) )
                       * cos( radians( lng ) - radians($lng)
                       ) + sin( radians($lat) ) *
                       sin( radians( lat ) ) )
                      )<". $distance)
            ->groupBy('fleets.id')
            ->orderBy("distance",'asc')
            ->limit(10)->get();


        return $fleets;

    }
    public function assignOrder($order_id,$lat,$lng,$distance)
    {
        $order= Order::with('user','status')->whereId($order_id)->first();
        $order=$order->makeHidden(['balance_client','balance_fleet','reason','fleet_id','picked_up_at','delivered_at','city_id','deleted_at']);
        $fleet= $this->distance($lat,$lng,$distance);
        $tokens=[];
        $driver_id=[];
        if($fleet!=null) {
            foreach ($fleet as $row) {
                array_push($tokens, $row->device_token);
                array_push($driver_id, $row->id);
            }
            $title = "Curve";
            $body = "  New Order";
            $this->sendNotification($tokens, $body, $title);

            event(new NewOrder($order, $driver_id));
        }

    }
}
