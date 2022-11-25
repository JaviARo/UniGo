<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class uses extends Model
{
    use HasFactory;
    protected $fillable = ['position', 'size', 'design_id', 'clothes_id'];
    
    public function designs(){
        return $this->hasMany('App\Models\Design');
    }

    public function clothes(){
        return $this->hasMany('App\Models\Clothes');
    }
}
