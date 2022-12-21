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

        if( $request->hasFile('img') ) {
            $file = $request->file('img');
            $destinationPath = 'images/propertiesTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $image->img = $destinationPath . $filename;
        }

        $property->name = $request->name;
        $property->position = $request->position;
        $property->size = $request->size;
        $property->favourite = $request->favourite;
        $property->image_id = $request->image_id;
        $property->clothes_id = $request->clothes_id;

        $property->save();
    }

    public function show($id)
    {
        $property = properties::find($id);
        return $property;
    }

    public function showUser($id)
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
        $property->favourite = $request->favourite;
        $property->image_id = $request->image_id;
        $property->clothes_id = $request->clothes_id;

        $property->save();
    }

    public function destroy($id)
    {
        $property = properties::destroy($id);
        return $property;
    }
}
