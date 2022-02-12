<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/projects',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/', [ProjectsController::class, 'projects'])->name('api.ui.projects.all');
    Route::get('/{id}', [ProjectsController::class, 'projectById'])->name('api.ui.projects.single');
    Route::get('/graphics/', [ProjectsController::class, 'graphicProjects'])->name('api.ui.projects.graphics.all');
    Route::get('/coding/', [ProjectsController::class, 'codingProjects'])->name('api.ui.projects.coding.all');
});
