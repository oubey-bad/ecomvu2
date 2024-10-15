<?php

use App\Http\Controllers\Api\RegisterController;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
Route::get('/user', function (Request $request) {
    
    return response()->json($request->user()) ;
})->middleware(Authenticate::using('sanctum'));

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout')->middleware(Authenticate::using('sanctum'));
});
Route::controller(RegisterController::class)->group(function(){
    Route::apiResource('products', 'products');
    
});


Route::apiResource('products', App\Http\Controllers\ProductController::class)->only(['index', 'store', 'show', 'update', 'destroy']);

Route::apiResource('categories', App\Http\Controllers\CategoryController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
