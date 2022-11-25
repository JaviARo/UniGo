<?php

use App\Http\Controllers\Api\AppUserController;
use App\Http\Controllers\Api\ClothesController;
use App\Http\Controllers\Api\DesignController;
use App\Http\Controllers\Api\UsesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AppUserController::class)->group(function () {
    Route::get('/AppUsers', 'index');
    Route::post('/AppUser', 'store');
    Route::get('/AppUser/{id}', 'show');
    Route::put('/AppUser/{id}', 'update');
    Route::delete('/AppUser/{id}', 'destroy');
});

Route::controller(ClothesController::class)->group(function () {
    Route::get('/Clothes', 'index');
    Route::post('/Cloth', 'store');
    Route::get('/Cloth/{id}', 'show');
    Route::put('/Cloth/{id}', 'update');
    Route::delete('/Cloth/{id}', 'destroy');
});

Route::controller(DesignController::class)->group(function () {
    Route::get('/Designs', 'index');
    Route::post('/Design', 'store');
    Route::get('/Design/{id}', 'show');
    Route::put('/Design/{id}', 'update');
    Route::delete('/Design/{id}', 'destroy');
});

Route::controller(UsesController::class)->group(function () {
    Route::get('/Uses', 'index');
    Route::post('/Use', 'store');
    Route::get('/Use/{id}', 'show');
    Route::put('/Use/{id}', 'update');
    Route::delete('/Use/{id}', 'destroy');
});

