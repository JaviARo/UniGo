<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class design extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'img', 
        'position', 
        'size', 
        'favourite', 
        'user_id',
        'image_id', 
        'clothes_id'
    ];

    public function user(){
        return $this->hasMany('App\Models\User');
    }

    public function image(){
        return $this->hasMany('App\Models\image');
    }

    public function clothes(){
        return $this->hasMany('App\Models\clothes');
    }
}
