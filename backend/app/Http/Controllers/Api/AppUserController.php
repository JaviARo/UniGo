<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\app_user;
use Illuminate\Http\Request;

class AppUserController extends Controller
{
    public function index()
    {
        $app_users = app_user::all();
        return $app_users;
    }

    public function store(Request $request)
    {
        $app_user = new app_user();
        $app_user->dni = $request->dni;
        $app_user->name = $request->name;
        $app_user->username = $request->username;
        $app_user->password = $request->password;
        $app_user->email = $request->email;
        $app_user->type = $request->type;

        $app_user->save();
        return $app_user;
    }

    public function show($id)
    {
        $app_user = app_user::find($id);
        return $app_user;
    }

    public function update(Request $request, $id)
    {
        $app_user = app_user::findOrFail($request->id);
        $app_user->dni = $request->dni;
        $app_user->name = $request->name;
        $app_user->username = $request->username;
        $app_user->password = $request->password;
        $app_user->email = $request->email;
        $app_user->type = $request->type;

        $app_user->save();
        return $app_user;
    }

    public function destroy($id)
    {
        $app_user = app_user::destroy($id);
        return $app_user;
    }
}
