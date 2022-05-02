<?php

namespace App\Console\Commands;

use App\Enums\AOrderStatus;
use App\Events\NewOrder;
use App\Http\Controllers\Driver\FCMController;
use App\Order;
use App\OrderStatus;
use Illuminate\Console\Command;

class AssignOrder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:assign';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
//        $orders=Order::where("order_status_id",AOrderStatus::NEW_ORDER)->get();
//
//        $fcm= new FCMController();
//        $fleet='';
//        foreach ($orders as $order) {
//
//            $to = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s',$order->created_at);
//            $from = \Carbon\Carbon::now();
//            $diff_in_days = $to->diffInSeconds($from);
//            if($diff_in_days<30) {
//                $fcm->assignOrder($order->id,$order->pick_up_lat,$order->pick_up_lng,3);
//            }
//            elseif ($diff_in_days>30 && $diff_in_days<=120){
//                $fcm->assignOrder($order->id,$order->pick_up_lat,$order->pick_up_lng,6);
//
//            }elseif ($diff_in_days>120 && $diff_in_days<=360){
//                $fcm->assignOrder($order->id,$order->pick_up_lat,$order->pick_up_lng,8);
//
//            }
//           elseif ($diff_in_days>360 && $diff_in_days<=720){
//                $fcm->assignOrder($order->id,$order->pick_up_lat,$order->pick_up_lng,10);
//
//            }
//            elseif ($diff_in_days>720 && $diff_in_days<=1200){
//                $fcm->assignOrder($order->id,$order->pick_up_lat,$order->pick_up_lng,15);
//
//            }
//            else{
//                $order->order_status_id=53;
//                $order->save();
//            }
//
//        }





    }
}
