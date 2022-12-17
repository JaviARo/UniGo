<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class image extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 
        'img', 
        'user_id'
    ];

    public function users(){
        return $this->hasMany('App\Models\User');
    }

    public function properties(){
        return $this->belongsTo('App\Models\Properties');
    }
}
