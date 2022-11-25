<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsesController extends Controller
{

    public function index()
    {
        $uses = uses::all();
        return $uses;
    }

    public function store(Request $request)
    {
        $uses = new uses();
        $uses->position = $request->position;
        $uses->size = $request->size;
        $uses->design_id = $request->design_id;
        $uses->clothes_id = $request->clothes_id;

        $uses->save();
    }

    public function show($id)
    {
        $uses = uses::find($id);
        return $uses;
    }

    public function update(Request $request, $id)
    {
        $uses = uses::findOrFail($request->id);
        $uses->position = $request->position;
        $uses->size = $request->size;
        $uses->design_id = $request->design_id;
        $uses->clothes_id = $request->clothes_id;

        $uses->save();
    }

    public function destroy($id)
    {
        $uses = uses::destroy($id);
        return $uses;
    }
}
