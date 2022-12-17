<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\image;
use Illuminate\Http\Request;

class ImageController extends Controller
{

    public function index()
    {
        $images = image::all();
        return $images;
    }

    public function store(Request $request)
    {
        $image = new image();
        $image->name = $request->name;
        $image->img = $request->img;
        $image->user_id = $request->user_id;

        $image->save();
    }

    public function show($id)
    {
        $image = image::find($id);
        return $image;
    }

    public function update(Request $request, $id)
    {
        $image = image::findOrFail($request->id);
        $image->name = $request->name;
        $image->img = $request->img;
        $image->user_id = $request->user_id;

        $image->save();
    }

    public function destroy($id)
    {
        $image = image::destroy($id);
        return $image;
    }
}
