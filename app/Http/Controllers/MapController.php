<?php

namespace App\Http\Controllers;

use App\Enums\AOrderStatus;
use App\Enums\DriverApply;
use App\Fleet;
use App\Order;
use Illuminate\Http\Request;

class MapController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $query = Order::with('status');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
        }
        $query->whereIn('order_status_id', [
            AOrderStatus::NEW_ORDER,
            AOrderStatus::ASSIGNED_TO_DRIVER,
            AOrderStatus::DRIVER_ACCEPTED,
            AOrderStatus::DRIVER_REJECTED,
            AOrderStatus::TO_BE_DELIVERED,
            AOrderStatus::TO_BE_PICKED_UP,
            AOrderStatus::PICKED_UP,

        ]);
        $orders = $query->orderBy('id', 'DESC')->get();
        $fquery =  Fleet::where('application_status_id',DriverApply::APPROVED_BY_PUDO)->withCount('orders');
        if ($user->hasRole('user')) {
            $fquery->where('user_id', $user->id);
        }

        $fleets = $fquery->get();

        return response()->json(compact('orders', 'fleets'));
    }
}
