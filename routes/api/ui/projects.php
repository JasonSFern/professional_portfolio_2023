<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api\UI\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'ui/projects',
    'namespace' => 'Api\UI',
], function () {
    Route::get('/graphics/', [ProjectsController::class, 'graphicProjects'])->name('api.ui.graphics.all');
    Route::get('/graphics/{id}', [ProjectsController::class, 'projectById'])->name('api.ui.graphics.single');
    Route::get('/coding/', [ProjectsController::class, 'codingProjects'])->name('api.ui.coding.all');
    Route::get('/coding/{id}', [ProjectsController::class, 'projectById'])->name('api.ui.coding.single');
});
