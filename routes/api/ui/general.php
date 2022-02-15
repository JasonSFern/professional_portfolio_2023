<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ClassificationsController;
use App\Http\Controllers\ContactsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/general',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/classifications/', [ClassificationsController::class, 'classifications'])->name('api.ui.classifications.all');
    Route::post('/email/', [ContactsController::class, 'storeContactForm'])->name('api.ui.email.store');
});
