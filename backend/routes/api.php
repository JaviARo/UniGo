<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ClothesController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\PropertiesController;
use App\Http\Controllers\Api\AuthController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
//Route::post('register', [AuthController::class, 'register']);

Route::group( ['middleware' => ["auth:sanctum"]], function(){
    //rutas
    Route::get('user-profile', [AuthController::class, 'userProfile']);
    Route::get('logout', [AuthController::class, 'logout']);

    Route::controller(UserController::class)->group(function () {
        Route::get('/users', 'index');
        Route::get('/user/{id}', 'show');
        Route::get('/user/{id}/designs', 'designs');
        Route::get('/user/{id}/images', 'images');
        Route::get('/user/{id}/clothes', 'clothes');
        Route::put('/user/{id}', 'update');
        Route::delete('/user/{id}', 'destroy');
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
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
    Route::get('/properties/user/{id}', 'showUser');
    Route::put('/property/{id}', 'update');
    Route::delete('/property/{id}', 'destroy');
});

