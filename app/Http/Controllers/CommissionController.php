<?php

namespace App\Http\Controllers;

use App\Commission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $commissions = Commission::paginate($request->get('itemsLimit'));

        return response()->json(compact('commissions'));
    }

    public function changeStatus($driverId, Request $request)
    {
        $query = Fleet::where('id', $driverId);
        $query->update(["application_status_id" => $request->get('status_id')]);
        $order = $query->first();
        return response()->json(compact('order'));
    }


    public function show($id)
    {
        $fleet = User::with('files')->whereId($id)->first();
        return response()->json(compact('fleet'));
    }

    public function create()
    {
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [  //validate inputs
            "name" => 'required',
            "type" => 'required',
            "price" => 'required',
        ]);


        if ($validator->fails()) {  // in case validator failed
            return response()->json(['status' => false, 'message' => 'required inputs', 'data' => $validator->errors()], 400);
        }

        $data = $request->all();
        Commission::create($data);

        return response()->json(['status' => 'success']);
    }

    public function edit($id)
    {
        $commission= Commission::find($id);
        return response()->json(compact('commission'));
    }

    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [  //validate inputs
            "name" => 'required',
            "type" => 'required',
            "price" => 'required',
        ]);

        if ($validator->fails()) {  // in case validator failed
            return response()->json(['status' => false, 'message' => 'required inputs', 'data' => $validator->errors()], 400);
        }
        $commision = Commission::find($id);
        $data = $request->all();
        $commision->update($data);

        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $commision = Commission::find($id);
        $commision->delete();
        return response()->json(['status' => 'success']);
    }
}
