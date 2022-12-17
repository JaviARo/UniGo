<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AppUserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    // public function store(Request $request)
    // {
    //     $user = new User();
    //     $user->dni = $request->dni;
    //     $user->name = $request->name;
    //     $user->username = $request->username;
    //     $user->password = $request->password;
    //     $user->email = $request->email;
    //     $user->type = $request->type;

    //     $user->save();
    //     return $user;
    // }

    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->username = $request->username;
        $user->password = $request->password;
        $user->email = $request->email;
        $user->type = $request->type;

        $user->save();
        return $user;
    }

    public function destroy($id)
    {
        $user = User::destroy($id);
        return $user;
    }
}
