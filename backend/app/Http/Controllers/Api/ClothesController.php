<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\clothes;
use Illuminate\Http\Request;

class ClothesController extends Controller
{
    public function index()
    {
        $clothes = clothes::all();
        return $clothes;
    }

    public function store(Request $request)
    {
        $clothes = new clothes();
        $clothes->name = $request->name;
        $clothes->img = $request->img;

        $clothes->save();
    }

    public function show($id)
    {
        $clothes = clothes::find($id);
        return $clothes;
    }

    public function update(Request $request, $id)
    {
        $clothes = clothes::findOrFail($request->id);
        $clothes->name = $request->name;
        $clothes->img = $request->img;

        $clothes->save();
        return $clothes;
    }

    public function destroy($id)
    {
        $clothes = clothes::destroy($id);
        return $clothes;
    }
}
