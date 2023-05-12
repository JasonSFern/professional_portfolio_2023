<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ExperienceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('experience/', [ExperienceController::class, 'list'])->name('api.ui.experience.all');
    Route::get('experience/{id}', [ExperienceController::class, 'single'])->name('api.ui.experience.single');
    Route::get('experience-work/', [ExperienceController::class, 'work'])->name('api.ui.experience.work');
    Route::get('experience-volunteer/', [ExperienceController::class, 'volunteer'])->name('api.ui.experience.volunteer');
});
