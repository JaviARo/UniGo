<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
   
class AuthController extends BaseController
{
    public function signin(Request $request)
    {
        if(Auth::attempt(['username' => $request->username, 'password' => $request->password])){ 
            $authUser = Auth::User(); 
            $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken; 
            $success['id'] =  $authUser->id;
            $success['type'] =  $authUser->type;

            return $this->sendResponse($success, 'User signed in');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'dni' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'username' => 'required',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['id'] =  $user->id;
   
        return $this->sendResponse($success, 'User created successfully.');
    }

    // public function register(Request $request) {
    //     $request->validate([
    //         'dni' => 'required',
    //         'name' => 'required',
    //         'username' => 'required|unique:users',
    //         'password' => 'required|confirmed',
    //         //'confirm_password' => 'required|same:password',
    //         'email' => 'required|email|unique:users',
    //         'type' => 'required',
            
    //     ]);

    //     $user = new User();
    //     $user->dni = $request->dni;
    //     $user->name = $request->name;
    //     $user->username = $request->username;
    //     $user->password = Hash::make($request->password);
    //     $user->email = $request->email;
    //     $user->type = $request->type;

    //     $user->save();

    //     return response()->json([
    //         "status" => 1,
    //         "msg" => "¡Registro de usuario exitoso!",
    //     ]);
    // }

    public function userProfile() {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil de usuario",
            "data" => auth()->user()
        ]);
    }

    public function logout() {
        auth()->user()->tokens()->delete();

        return response()->json([
            "status" => 1,
            "msg" => "Cierre de sesión"
        ]);
    }
   
}