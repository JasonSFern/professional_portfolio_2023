<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projects;

class ProjectsController extends Controller
{
    public function projects(Request $request) {
        $data = Projects::where('is_active', 1)->get();
        return $data;
    }
    
    public function projectById($id) {
        $data = Projects::find($id);
        return $data;
    }

    public function codingProjects(Request $request) {
        $data = Projects::where('classification', 1)->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function designProjects(Request $request) {
        $data = Projects::where('classification', 2)->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
