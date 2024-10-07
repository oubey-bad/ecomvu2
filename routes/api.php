<?php

use App\Http\Controllers\Api\RegisterController;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware(Authenticate::using('sanctum'));

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});

Route::apiResource('product', App\Http\Controllers\ProductController::class)->only(['index', 'store', 'show', 'update', 'destroy']);

Route::apiResource('category', App\Http\Controllers\CategoryController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
