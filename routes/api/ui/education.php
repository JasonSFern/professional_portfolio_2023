<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\EducationController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('education/', [EducationController::class, 'list'])->name('api.ui.education.all');
    Route::get('education/{id}', [EducationController::class, 'single'])->name('api.ui.education.single');
    Route::get('education-degree/', [EducationController::class, 'degree'])->name('api.ui.education.degree');
    Route::get('education-certificate/', [EducationController::class, 'certificate'])->name('api.ui.education.certificate');
});
