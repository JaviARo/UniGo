<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\image;
use App\Models\design;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function images($id)
    {
        $images = image::where('user_id',$id)->get();
        return $images;
    }

    public function designs($id)
    {
        $designs = design::where('user_id',$id)->get();
        return $designs;
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->username = $request->username;
        $user->email = $request->email;

        $user->save();
        return $user;
    }

    public function destroy($id)
    {
        $user = User::destroy($id);
        return $user;
    }
}
