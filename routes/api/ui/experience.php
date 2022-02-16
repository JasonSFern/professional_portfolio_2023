<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ExperienceController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/experience',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/', [ExperienceController::class, 'experience'])->name('api.ui.experience.all');
    Route::get('/{id}', [ExperienceController::class, 'experienceById'])->name('api.ui.experience.single');
    Route::get('/work/', [ExperienceController::class, 'work'])->name('api.ui.experience.work.all');
    Route::get('/education/', [ExperienceController::class, 'education'])->name('api.ui.experience.education.all');
    Route::get('/volunteer/', [ExperienceController::class, 'volunteer'])->name('api.ui.experience.volunteer.all');
});
