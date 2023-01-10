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
            $table->string('img');
            $table->string('position');
            $table->integer('size');
            $table->boolean('favourite');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('clothes_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->foreign('image_id')
                ->references('id')
                ->on('images')
                ->onDelete('cascade');
            $table->foreign('clothes_id')
                ->references('id')
                ->on('clothes')
                ->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('designs');
    }
};
