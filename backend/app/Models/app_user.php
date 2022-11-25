<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class app_user extends Model
{
    use HasFactory;
    protected $fillable = ['dni', 'name', 'username', 'password', 'email', 'type'];

    public function design(){
        return $this->belongsTo('App\Models\Design');
    }
}
