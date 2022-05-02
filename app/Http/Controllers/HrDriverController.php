<?php

namespace App\Http\Controllers;

use App\ApplicationStatus;
use App\Enums\AOrderStatus;
use App\Enums\ContractType;
use App\Enums\DriverApply;
use App\Fleet;
use App\FleetFile;
use App\Models\Users;
use App\Order;
use App\Rules\AgeValidationRule;
use App\User as AppUser;
use Carbon\Carbon;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;
use Importer;

class HrDriverController extends Controller
{

    public function index(Request $request)
    {
        $user = auth('api')->user();
        $statuses = ApplicationStatus::all();
        $query = Fleet::with('applicationStatus');
        if ($user->hasRole('user')) {
            $query->where('user_id', $user->id);
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
            $column = $sorter->column == '' ? 'last_login' : $sorter->column;
            $query->orderBy($column, $by);
        }
        $fleets = $query->paginate($request->get('itemsLimit'));
        $onlineCount  = $query->where("status", 'online')->count();
        foreach ($fleets as $fleet) {
            $balance = $fleet->balanceFloat;
            $fleet['fleet_balance'] = $balance;
        }

        return response()->json(compact('fleets', 'onlineCount', 'statuses','user'));
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
        $fleet = Fleet::with('files', 'applicationStatus')->whereId($id)->first();
        return response()->json(compact('fleet'));
    }

    public function create()
    {

        $statuses = ApplicationStatus::all();
        $user = auth('api')->user();
        return response()->json(['status' => $statuses,'user'=>$user], 200);
    }

    public function store(Request $request)
    {
        $user = auth('api')->user();


        $validatedData = $request->validate([
            "mobile" => 'required|unique:fleets|numeric|min:10',
            "name" => 'required',
            "identity" => 'required|unique:fleets|min:10',
            "nationality" => 'required',
            "age" => ['required','numeric',new AgeValidationRule()],
            "nationalityId" => 'numeric',
            "contract_type"=>"required",
            "country"=>"required",
            "gender"=>"required",
            "vehicle_type"=>"required"

        ]);
        $maxCode = Fleet::max('code');
        $fleet = new Fleet();
        $fleet->user_id = $user->id;
        $fleet->supplier_uuid = $user->uuid;
        $fleet->code = intval($maxCode) + 1;
        $fleet->mobile = $request->get('mobile');
        $fleet->bank_iban = $request->get('bank_iban');
        $fleet->application_status_id = $request->get('application_status_id');
        $fleet->name = $request->get('name');
        $fleet->identity = $request->get('identity');
        $fleet->nationality = $request->get('nationality');
        $fleet->age = $request->get('age');
        $fleet->uuid = $request->get('uuid');
        $fleet->bank_name = $request->get('bank_name');
        $fleet->gender = $request->get('gender');
        $fleet->country = $request->get('country');
        $fleet->vehicle_type = $request->get('vehicle_type');
        $fleet->nationalityId = $request->get('nationalityId');
        $fleet->contract_type = $request->get('contract_type');
        $fleet->status = 'offline';
        $fleet->image = null;
        $fleet->password = bcrypt($request->get('password'));
        $fleet->save();

        return response()->json(['status' => 'success']);
    }


    public function edit($id)
    {
        $user = auth('api')->user();
        $fleet = Fleet::with('files', 'applicationStatus')->whereId($id)->first();
        $suppliers = \App\User::where('menuroles', 'user')->orWhere('menuroles', 'user,admin')->get();
        if ($user->menuroles == 'user') {
            $status = ApplicationStatus::whereIn('id', [
                DriverApply::APPROVED_BY_SUPPLIER,
                DriverApply::NEW_APP,
                DriverApply::REJECTED_BY_SUPPLIER,
            ])->get();
            return response()->json(compact('fleet', 'status'));
        }
        $status = ApplicationStatus::all();
        $user = auth('api')->user();
        return response()->json(compact('fleet', 'status', 'suppliers','user'));
    }

    public function update(Request $request, $id)
    {

        $validatedData = $request->validate([
            "mobile" => 'required|numeric|min:10',
            "name" => 'required',
            "identity" => 'required|min:10',
            "nationality" => 'required',
            "age" => ['required','numeric',new AgeValidationRule()],
            "nationalityId" => 'numeric',
            "contract_type"=>"required",
            "country"=>"required",
            "gender"=>"required",
            "vehicle_type"=>"required"
        ]);

        $inputs = $request->all();
        $fleet = Fleet::find($id);
        $fleet->mobile = $request->get('mobile');
        $fleet->bank_iban = $request->get('bank_iban');
        $fleet->application_status_id = $request->get('application_status_id');
        $fleet->name = $request->get('name');
        $fleet->identity = $request->get('identity');
        $fleet->nationality = $request->get('nationality');
        $fleet->block = $request->get('block');
        $fleet->user_id = $request->get('supplier_id');
        // $suplier = AppUser::find($request->get('supplier_id'));
        // $fleet->supplier_uuid = $suplier->uuid;
        $fleet->country = $request->get('country');
        $fleet->age = $request->get('age');
        $fleet->uuid = $request->get('uuid');
        $fleet->bank_name = $request->get('bank_name');
        $fleet->vehicle_type = $request->get('vehicle_type');
        $fleet->nationalityId = $request->get('nationalityId');
        $fleet->contract_type = $request->get('contract_type');
        if (strlen($request->password) >= 8) {
            $password = Hash::make($request->password);
            $fleet->password = $password;

        }
        $fleet->save();
        return response()->json(['status' => 'success']);
    }

    public function destroy($id)
    {
        $fleet = Fleet::find($id);
        if ($fleet)
            $fleet->delete();
        return response()->json(['status' => 'success']);
    }

    public function bulkDriver(Request $request)
    {

        $file = $request->file('file');
        $excel = Importer::make('Excel');
        $excel->Load($file);
        $collection = $excel->getCollection();


        for ($row = 1; $row < sizeof($collection); $row++) {
            try {
                $main_inputs = [];
                $inputs_text = $collection[0];
                $inputs_value = $collection[$row];
                for ($j = 0; $j < 11; $j++) {
                    $main_inputs[$inputs_text[$j]] = $inputs_value[$j];
                }


                $validation_inputs = Validator::make($main_inputs, [
                    'name' => 'required',
                    'mobile' =>  'required|numeric|unique:fleets',
                    'password' => 'required|min:6',
                    'identity' => 'required|unique:fleets',
                    'age' => 'required|numeric',
                    'contract_type' => 'required',
                    'vehicle_type' => 'required',
                    'bank_name' => 'required',
                    'bank_iban' => 'required',
                    'nationality' => 'required',
                    'nationalityId' => 'required|numeric'
                ]);


                if ($validation_inputs->fails()) {
                    $errors = $validation_inputs->errors();
                    return view('errors', ['my_errors' => $errors]);
                }


                $user =  auth()->user();
                $maxCode = Fleet::max('code');
                $main_inputs['verification_code'] = 123456;
                $main_inputs['application_status_id'] = 1;
                $main_inputs['code'] = intval($maxCode) + 1;
                $main_inputs['status'] = 'offline';


                $chars = array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
                $serial = '';
                $max = count($chars) - 1;
                for ($i = 0; $i < 40; $i++) {
                    $serial .= (!($i % 5) && $i ? '-' : '') . $chars[rand(0, $max)];
                }

                $main_inputs['uuid'] = $serial;
                $main_inputs['supplier_uuid'] = $user->uuid;
                $main_inputs['image'] = null;
                $main_inputs['password'] = bcrypt($main_inputs['password']);
                $main_inputs['user_id'] = $user->id;

                Fleet::create($main_inputs);
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        }
        return redirect('/#/driver-applications/');
    }
}
