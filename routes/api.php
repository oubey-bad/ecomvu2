<?php

use Illuminate\Support\Facades\Route;

Route::resource('product', App\Http\Controllers\ProductController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
Route::resource('category', App\Http\Controllers\CategoryController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
