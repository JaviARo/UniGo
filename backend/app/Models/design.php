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
        return $this->belongsTo('App\Models\User');
    }

    public function image(){
        return $this->belongsTo('App\Models\image');
    }

    public function clothes(){
        return $this->belongsTo('App\Models\clothes');
    }
}
