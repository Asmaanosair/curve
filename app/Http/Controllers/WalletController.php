<?php

namespace App\Http\Controllers;

use App\Fleet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function wallet($id){
        $fleet  = Fleet::find($id);
        try {
            $balance = $fleet->balanceFloat;
            $transactions = $fleet->transactions()->orderBy('created_at','DESC')->paginate(20);
            foreach ($transactions as $transaction) {
                $transaction->amount = $transaction->amount / 100;
            }
            $wallet['balance'] = $balance;
            $wallet['transactions'] = $transactions;

            return response()->json(compact('wallet'));
        }catch (\Exception $exception){
            return response()->json(['message' => $exception->getMessage(), 'data' => []], 500);
        }
    }

    public function withdraw($id, Request $request){
        $fleet  = Fleet::find($id);
        if ($request->get('amount') == 0)
            return response()->json(["message'=>'the Amount mustn't be 0"],400);

        $fleet->withdrawFloat($request->get('amount'),['description'=>$request->get('description')]);
        return response()->json([]);
    }
}
