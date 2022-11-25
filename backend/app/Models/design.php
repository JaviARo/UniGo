<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class design extends Model
{
    use HasFactory;
    protected $fillable = ['favourite', 'app_user_id'];

    public function app_users(){
        return $this->hasMany('App\Models\App_user');
    }

    public function uses(){
        return $this->belongsTo('App\Models\Uses');
    }
}
