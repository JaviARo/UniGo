<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\design;
use Illuminate\Http\Request;

class DesignController extends Controller
{
    public function index()
    {
        $design = design::all();
        return $design;
    }

    public function store(Request $request)
    {
        $design = new design();

        if( $request->hasFile('img') ) {
            $file = $request->file('img');
            $destinationPath = 'images/designTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $image->img = $destinationPath . $filename;
        }

        $design->name = $request->name;
        $design->position = $request->position;
        $design->size = $request->size;
        $design->favourite = $request->favourite;
        $design->image_id = $request->image_id;
        $design->clothes_id = $request->clothes_id;
        $design->user_id = $request->user_id;

        $design->save();
    }

    public function show($id)
    {
        $design = design::find($id);
        return $design;
    }

    // public function showUser($id)
    // {
    //     $design = design::find($id);
    //     return $design;
    // }

    public function update(Request $request, $id)
    {
        $design = design::findOrFail($request->id);
        $design->name = $request->name;
        $design->img = $request->img;
        $design->position = $request->position;
        $design->size = $request->size;
        $design->favourite = $request->favourite;
        $design->image_id = $request->image_id;
        $design->clothes_id = $request->clothes_id;
        $design->user_id = $request->user_id;

        $design->save();
    }

    public function destroy($id)
    {
        $design = design::destroy($id);
        return $design;
    }
}
