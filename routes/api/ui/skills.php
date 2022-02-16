<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\SkillsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/skills',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/', [SkillsController::class, 'skills'])->name('api.ui.skills.all');
    Route::get('/{id}', [SkillsController::class, 'skillById'])->name('api.ui.skills.single');
    Route::get('/design/', [SkillsController::class, 'designSkills'])->name('api.ui.skills.design.all');
    Route::get('/coding/', [SkillsController::class, 'codingSkills'])->name('api.ui.skills.coding.all');
});
