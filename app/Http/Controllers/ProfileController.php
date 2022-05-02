<?php

namespace App\Http\Controllers;

use App\Commission;
use App\User;
use Ejarnutowski\LaravelApiKey\Models\ApiKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function getProfile()
    {
        $user = auth('api')->user();
        $commissions=Commission::all();
        return response()->json(['message' => 'created', 'user' => $user, 'commissions'=>$commissions], 200);
    }

    public function editProfile(Request $request)
    {
        $user_id = auth('api')->user()->id;

        $user = User::find($user_id);
        ApiKey::where(['name'=> $user->name, 'key'=>$user->api_id])->update(['key' => $request->api_id]);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->company_name = $request->company_name;
        $user->commission_id=$request->commission;
        $user->name=$request->name;
        $user->api_id = $request->api_id;
        $user->save();
        return response()->json(['message' => 'created', 'data' => $user], 200);
    }


    public function resetPassword(Request $request)
    {
        $user_id = auth('api')->user()->id;
        $user = User::find($user_id);
        $old_password = $request->old_password;
        $new_password = $request->new_password;
        if (Hash::check($old_password, $user->password)) {
            $user->password = Hash::make($new_password);
            $user->save();
            return response()->json(['message' => 'created', 'data' => $user], 200);
        } else {
            return response()->json(['message' => 'failed', 'data' => 'failed updated'], 404);
        }
    }
}
