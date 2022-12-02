<?php

use App\Http\Controllers\Api\AppUserController;
use App\Http\Controllers\Api\ClothesController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\UsesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AppUserController::class)->group(function () {
    Route::get('/appUsers', 'index');
    Route::post('/appUser', 'store');
    Route::get('/appUser/{id}', 'show');
    Route::put('/appUser/{id}', 'update');
    Route::delete('/appUser/{id}', 'destroy');
});

Route::controller(ClothesController::class)->group(function () {
    Route::get('/clothes', 'index');
    Route::post('/cloth', 'store');
    Route::get('/cloth/{id}', 'show');
    Route::put('/cloth/{id}', 'update');
    Route::delete('/cloth/{id}', 'destroy');
});

Route::controller(ImageController::class)->group(function () {
    Route::get('/images', 'index');
    Route::post('/image', 'store');
    Route::get('/image/{id}', 'show');
    Route::put('/image/{id}', 'update');
    Route::delete('/image/{id}', 'destroy');
});

Route::controller(PropertiesController::class)->group(function () {
    Route::get('/properties', 'index');
    Route::post('/property', 'store');
    Route::get('/property/{id}', 'show');
    Route::put('/property/{id}', 'update');
    Route::delete('/property/{id}', 'destroy');
});

