
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Coding projects
Route::get('/avix', function () {
    return view('coding.avix.avixHome');
});
Route::get('/calculator', function () {
    return view('coding.calculator.calculatorApp');
});

// Main SPA
Route::get('/{any}', function () {
    return view('layouts.vue');
})->where('any', '.*');