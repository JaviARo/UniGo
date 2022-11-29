<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\properties;
use Illuminate\Http\Request;

class PropertiesController extends Controller
{
    public function index()
    {
        $properties = properties::all();
        return $properties;
    }

    public function store(Request $request)
    {
        $property = new properties();
        $property->name = $request->name;
        $property->img = $request->img;
        $property->position = $request->position;
        $property->size = $request->size;
        $property->design_id = $request->design_id;
        $property->clothes_id = $request->clothes_id;

        $property->save();
    }

    public function show($id)
    {
        $property = properties::find($id);
        return $property;
    }

    public function update(Request $request, $id)
    {
        $property = properties::findOrFail($request->id);
        $property->name = $request->name;
        $property->img = $request->img;
        $property->position = $request->position;
        $property->size = $request->size;
        $property->design_id = $request->design_id;
        $property->clothes_id = $request->clothes_id;

        $property->save();
    }

    public function destroy($id)
    {
        $property = properties::destroy($id);
        return $property;
    }
}
