<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uses', function (Blueprint $table) {

            $table->string('position');
            $table->integer('size');
            $table->unsignedBigInteger('design_id');
            $table->unsignedBigInteger('clothes_id');

            $table->foreign('design_id')
                ->references('id')
                ->on('designs')
                ->onDelete('cascade');
            $table->foreign('clothes_id')
                ->references('id')
                ->on('clothes')
                ->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('uses');
    }
};
