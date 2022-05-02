<?php

namespace App\Http\Controllers;

use App\Branch;
use App\Client;
use App\User;
use App\UserStatus;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = auth('api')->user();
        $query = Branch::with('client');
        if ($user->menuroles == 'client' || $user->menuroles == 'client_branch') {
            $query->where('user_id', $user->id)->orWhere('client_id', $user->id);
        }

        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key, 'LIKE', '%' . $value . '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'created_at' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $branches = $query->paginate($request->get('itemsLimit'));


        return response()->json(compact('branches'));
    }
    public function branch(Request $request ,$id)
    {

        $user = auth('api')->user();

        $query = Branch::where("user_id",$id);

        if ($request->has('columnFilter')) {
            $columnFilters = json_decode($request->columnFilter, true);
            foreach ($columnFilters as $key => $value) {
                if ($value != "")
                    $query->where($key, 'LIKE', '%' . $value . '%');
            }
        }
        if ($request->has('sorter')) {
            $sorter = json_decode($request->sorter);
            $by = $sorter->asc == true ? 'ASC' : 'DESC';
            $column = $sorter->column == '' ? 'created_at' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $branches = $query->paginate($request->get('itemsLimit'));


        return response()->json(compact('branches'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $user = auth('api')->user();
        $statuses = UserStatus::all();
        if ($user->menuroles == 'client') {
            $clients =  Client::join('users', 'users.id','=', 'clients.user_id')
                ->where(['clients.admin_id'=>$user->id])->get();
            return response()->json(compact('clients','statuses'));
        }else{
            $clients =  User::where('menuroles', 'client')->get();
            return response()->json(compact('clients','statuses'));
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user=auth('api')->user();
        $data = $request->all();
        if ($user->menuroles == 'client') {
            $data['user_id'] = auth('api')->user()->id;
            Branch::create($data);
            return response()->json(['status' => 'success']);
        }else{

             $branch=new Branch();
            $branch->name=$request->name;
            $branch->pickup_lng=$request->pickup_lng;
            $branch->pickup_lat=$request->pickup_lat;
            $branch->delivery_lng=$request->delivery_lng;
            $branch->delivery_lat=$request->delivery_lat;
            $branch->user_id=$request->client_id;
            $branch->status=$request->status;
            $branch->save();
            return response()->json(['status' => 'success']);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $branch=Branch::find($id);
        $user = auth('api')->user();
        $statuses = UserStatus::all();
        return response()->json(compact('branch','user','statuses'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {


        $branch=Branch::find($id);
        $user=auth('api')->user();
            $branch->name=$request->name;
            $branch->pickup_lng=$request->pickup_lng;
            $branch->pickup_lat=$request->pickup_lat;
            $branch->delivery_lng=$request->delivery_lng;
            $branch->delivery_lat=$request->delivery_lat;
            $branch->status=$request->status;

        if ($user->menuroles == 'client') {
            $branch->client_id=$request->client_id;
        }else{
            $branch->user_id=$request->adminId;
        }

            $branch->save();
            return response()->json(['status' => 'success']);



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $branch = Branch::find($id);
        $branch->delete();
        return response()->json(['status' => 'success']);
    }
}
