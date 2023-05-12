<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\SkillsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('skills/', [SkillsController::class, 'list'])->name('api.ui.skills.all');
    Route::get('skills/{id}', [SkillsController::class, 'single'])->name('api.ui.skills.single');
    Route::get('skills-design/', [SkillsController::class, 'design'])->name('api.ui.skills.design');
    Route::get('skills-coding/', [SkillsController::class, 'coding'])->name('api.ui.skills.coding');
    Route::get('skills-ux/', [SkillsController::class, 'ux'])->name('api.ui.skills.ux');
});
