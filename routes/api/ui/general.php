<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ClassificationsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/general',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/classifications/', [ClassificationsController::class, 'classifications'])->name('api.ui.classifications.all');
});
