<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ClothesController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\PropertiesController;
use App\Http\Controllers\Api\AuthController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->app_user();
});

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
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

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);

