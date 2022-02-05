<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\GraphicsController;
use App\Http\Controllers\Api\UI\CodingController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/projects',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/graphics/', [GraphicsController::class, 'index'])->name('api.ui.graphics.all');
    Route::get('/coding/', [CodingController::class, 'index'])->name('api.ui.coding.all');
});
