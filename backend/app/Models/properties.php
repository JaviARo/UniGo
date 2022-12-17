<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class properties extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'img', 
        'position', 
        'size', 
        'favourite', 
        'image_id', 
        'clothes_id'
    ];

    public function designs(){
        return $this->hasMany('App\Models\Image');
    }

    public function clothes(){
        return $this->hasMany('App\Models\Clothes');
    }
}
