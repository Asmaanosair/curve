<?php

namespace App\Http\Controllers\Driver;

use App\Enums\AOrderStatus;
use App\Http\Controllers\Controller;
use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DB;

class StatisticsController extends Controller
{

    /**
     * @group  Driver Mobile API
     * Statistics
     * this api will return some statistics
     *
     */
    public function index(){
        Carbon::setWeekStartsAt(Carbon::SUNDAY);
        Carbon::setWeekEndsAt(Carbon::SATURDAY);
        $fleet = auth('fleet')->user();

        //delivered
        $delivered_day  = $fleet->orders()->where('order_status_id',AOrderStatus::DELIVERED)
            ->where('created_at',Carbon::today())->count();

        $delivered_week  = $fleet->orders()->where('order_status_id',AOrderStatus::DELIVERED)
            ->whereBetween('created_at',[Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();

        $delivered_month  = $fleet->orders()->where('order_status_id',AOrderStatus::DELIVERED)
            ->whereYear('created_at',date('Y'))
            ->whereMonth('created_at',date('m'))
            ->count();


        //canceled
        $canceled_day  = $fleet->orders()->where('order_status_id',AOrderStatus::CANCELED)
            ->where('created_at',Carbon::today())->count();

        $canceled_week  = $fleet->orders()->where('order_status_id',AOrderStatus::CANCELED)
            ->whereBetween('created_at',[Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();

        $canceled_month  = $fleet->orders()->where('order_status_id',AOrderStatus::CANCELED)
            ->whereYear('created_at',date('Y'))
            ->whereMonth('created_at',date('m'))
            ->count();

        //current
        $current_orders  = $fleet->orders()->whereNotIn('order_status_id',
            [AOrderStatus::DELIVERED,AOrderStatus::CANCELED, AOrderStatus::RETURNED, AOrderStatus::FAILED_TO_RETURN])
            ->count();


        $statistics  =[];
        $statistics["delivered_orders_day"] = $delivered_day;
        $statistics["delivered_orders-week"] = $delivered_week ;
        $statistics["delivered_orders_month"] = $delivered_month;

        $statistics["on_work_orders"] = $current_orders;

        $statistics["canceled_orders_day"] = $canceled_day;
        $statistics["canceled_orders-week"] = $canceled_week ;
        $statistics["canceled_orders_month"] = $canceled_month;

        return response()->json(['message' => 'successful', 'data'=>$statistics]);
    }
    public function indexNew(){
        Carbon::setWeekStartsAt(Carbon::SUNDAY);
        Carbon::setWeekEndsAt(Carbon::SATURDAY);
        $fleet = auth('fleet')->user();

        //delivered
        $total  = $fleet->orders()->count();


        //canceled
        $canceled  = $fleet->orders()->where('order_status_id',AOrderStatus::CANCELED)->count();
        $accept  = $fleet->orders()->where('order_status_id',AOrderStatus::DELIVERED)->count();

        $statistics  =[];
        $statistics["total"] = $total;
        $statistics["name"] = $fleet->name;
        $statistics["image"] = $fleet->image;
        $date=Carbon::createFromTimeString($fleet->last_login)->diffForHumans();
        $statistics["online"] = $date;


        $statistics["offline"] = $date;
        $statistics["canceled"] = $canceled ;
        $statistics["accept"] = $accept ;

        $transactions = $fleet->transactions()->get();
        $sum =0 ;
        foreach ($transactions as $transaction) {
            $sum += $transaction->amount ;
        }

        $statistics["total_earned"] = $sum ;

        return response()->json(['status' => true,'data'=>$statistics],200);
    }
}
