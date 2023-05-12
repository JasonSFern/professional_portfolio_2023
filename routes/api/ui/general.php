<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ClassificationController;
use App\Http\Controllers\Api\UI\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/general',
    'namespace' => 'Api\UI',
], function () {
    Route::get('classifications/', [ClassificationController::class, 'list'])->name('api.ui.general.classifications');
    Route::get('profile/', [ProfileController::class, 'get'])->name('api.ui.general.profile');
});
