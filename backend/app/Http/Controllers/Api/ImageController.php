<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ImageController extends Controller
{

    public function index()
    {
        $images = image::all();
        return $images;
    }

    public function showByUserId($id) {
        $images = image::where('user_id',$id)->get();
        return $images;
    }
    
    public function store(Request $request)
    {
        $image = new image();

        if( $request->hasFile('img') ) {
            $file = $request->file('img');
            $destinationPath = 'images/imagesTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $image->img = $destinationPath . $filename;
        }

        $image->name = $request->name;
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
        $image = image::find($id);
        $image->name = $request->input('name', '');
        $image->user_id = $request->input('user_id', 0);
  
        if ($request->hasfile('img')) {
            $destinationPath = 'images/imagesTable/'.$image->img;
            if(File::exists($destinationPath))
            {
                File::delete($destinationPath);
            }
            $img = $request->file('img');
            $filename = date('YmdHis') . "." . $img->getClientOriginalExtension();
            $img->move('images/imagesTable/', $filename);
            $image->img = $filename;
        }
        $image->update();
    }

    public function destroy($id)
    {
        $image = image::destroy($id);
        return $image;
    }
}
