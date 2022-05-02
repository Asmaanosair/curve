<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $table = 'Branches';
    protected $fillable=['name','client_id','user_id','pickup_lat','pickup_lng','delivery_lat','delivery_lng','status'];

    public function client(){
        return $this->belongsTo(User::class);
    }
}
