<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/',
    'namespace' => 'Api\UI',
], function () {
    Route::get('projects/', [ProjectsController::class, 'projects'])->name('api.ui.projects.all');
    Route::get('projects/{id}', [ProjectsController::class, 'projectById'])->name('api.ui.projects.single');
    Route::get('projects-design', [ProjectsController::class, 'designProjects'])->name('api.ui.projects.design.all');
    Route::get('projects-coding', [ProjectsController::class, 'codingProjects'])->name('api.ui.projects.coding.all');
});
