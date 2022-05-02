<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{

    use SoftDeletes;

    protected $fillable=[
        "code",
        "user_id",
        "order_status_id",
        "fleet_id",
        "number_of_products",
        "order_price",
        "discount",
        "deliver_fees",
        "total_price",
        "pick_up_lng",
        "pick_up_lat",
        "delivery_lng",
        "delivery_lat",
        "customer_name",
        "customer_mobile",
        "delivery_time",
        "picked_up_at",
        "delivered_at",
        "city_id",
        "payment_method",
        "created_at",
        "updated_at",
        "kilos_total_price",
        "kilos_count"

    ];


    public function products(){
        return $this->hasMany(Products::class,'order_id');
    }

    public function status(){
        return $this->belongsTo(OrderStatus::class,'order_status_id');
    }

    public function fleet(){
        return $this->belongsTo(Fleet::class,'fleet_id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function getPickUpLngAttribute($value){
        if(is_string($value)) {
            return (float)$value;
        }
        return $value;
    }
    public function getPickUpLatAttribute($value){
        if(is_string($value)) {
            return (float)$value;
        }
        return $value;
    }
    public function getDeliveryLngAttribute($value){
        if(is_string($value)) {
            return (float)$value;
        }
        return $value;
    }
    public function getDeliveryLatAttribute($value){
        if(is_string($value)) {
            return (float)$value;
        }
        return $value;
    }
    public function getNumberOfProductsAttribute($value){
        if(is_string($value)) {
            return (int)$value;
        }
        return $value;
    }
    public function getPaymentMethodAttribute($value){
        if(is_string($value)) {
            return (int)$value;
        }
        return $value;
    }
    public function invoice(){
        return $this->hasMany(Invoice::class,'order_id');
    }
}
