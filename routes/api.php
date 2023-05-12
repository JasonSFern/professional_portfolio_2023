<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//UI Routes
require base_path('routes/api/ui/education.php');
require base_path('routes/api/ui/experience.php');
require base_path('routes/api/ui/general.php');
require base_path('routes/api/ui/projects.php');
require base_path('routes/api/ui/skills.php');