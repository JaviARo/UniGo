<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clothes extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function uses(){
        return $this->belongsTo('App\Models\Uses');
    }
}
