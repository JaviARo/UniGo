<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class image extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img', 'favourite', 'app_user_id'];

    public function app_users(){
        return $this->hasMany('App\Models\App_user');
    }

    public function properties(){
        return $this->belongsTo('App\Models\Properties');
    }
}
