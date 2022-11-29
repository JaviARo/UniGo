<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\design;
use Illuminate\Http\Request;

class DesignController extends Controller
{

    public function index()
    {
        $designs = design::all();
        return $designs;
    }

    public function store(Request $request)
    {
        $design = new design();
        $design->name = $request->name;
        $design->img = $request->img;
        $design->favourite = $request->favourite;
        $design->app_user_id = $request->app_user_id;

        $design->save();
    }

    public function show($id)
    {
        $design = design::find($id);
        return $design;
    }

    public function update(Request $request, $id)
    {
        $design = design::findOrFail($request->id);
        $design->name = $request->name;
        $design->img = $request->img;
        $design->favourite = $request->favourite;
        $design->app_user_id = $request->app_user_id;

        $design->save();
    }

    public function destroy($id)
    {
        $design = design::destroy($id);
        return $design;
    }
}
