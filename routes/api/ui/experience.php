<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ExperienceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('experience/', [ExperienceController::class, 'experience'])->name('api.ui.experience.all');
    Route::get('experience/{id}', [ExperienceController::class, 'experienceById'])->name('api.ui.experience.single');
    Route::get('experience-work/', [ExperienceController::class, 'work'])->name('api.ui.experience.work.all');
    Route::get('experience-education/', [ExperienceController::class, 'education'])->name('api.ui.experience.education.all');
    Route::get('experience-volunteer/', [ExperienceController::class, 'volunteer'])->name('api.ui.experience.volunteer.all');
});
