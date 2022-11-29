<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('designs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->binary('img');
            $table->boolean('favourite');
            $table->unsignedBigInteger('app_user_id');
            $table->timestamps();
            
            $table->foreign('app_user_id')
                ->references('id')
                ->on('app_users')
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('designs');
    }
};
