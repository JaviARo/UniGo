<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ClothesController;
use App\Http\Controllers\Api\ImageController;
use App\Http\Controllers\Api\DesignController;
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
    Route::get('/images/user/{id}', 'showByUserId');
    Route::post('/image', 'store');
    Route::get('/image/{id}', 'show');
    Route::put('/image/{id}', 'update');
    Route::delete('/image/{id}', 'destroy');
});

Route::controller(DesignController::class)->group(function () {
    Route::get('/designs', 'index');
    Route::get('/designs/user/{id}', 'showByUserId');
    Route::get('/designs/count/{id}', 'countByUserId');
    Route::post('/design', 'store');
    Route::get('/design/{id}', 'show');
    Route::put('/design/{id}', 'update');
    Route::delete('/design/{id}', 'destroy');
});

