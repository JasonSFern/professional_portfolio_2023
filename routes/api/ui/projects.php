<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('projects/', [ProjectsController::class, 'list'])->name('api.ui.projects.all');
    Route::get('projects/{id}', [ProjectsController::class, 'single'])->name('api.ui.projects.single');
    Route::get('projects-coding', [ProjectsController::class, 'coding'])->name('api.ui.projects.coding');
    Route::get('projects-design', [ProjectsController::class, 'design'])->name('api.ui.projects.design');
    Route::get('projects-ux', [ProjectsController::class, 'ux'])->name('api.ui.projects.ux');
});
