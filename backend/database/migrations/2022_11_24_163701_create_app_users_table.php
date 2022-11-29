<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('app_users', function (Blueprint $table) {
            $table->id();
            $table->string('dni', 9);
            $table->string('name');
            $table->string('username');
            $table->string('password');
            $table->string('email');
            $table->char('type');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('app_users');
    }
};
