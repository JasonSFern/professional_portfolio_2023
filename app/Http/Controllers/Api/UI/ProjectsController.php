<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projects;

class ProjectsController extends Controller
{
    public function allProjects(Request $request) {
        $coding = Projects::all();
        return $coding;
    }

    public function codingProjects(Request $request) {
        $coding = Projects::where('classification', 1)->get();
        return $coding;
    }

    public function graphicProjects(Request $request) {
        $graphics = Projects::where('classification', 2)->get();
        return $graphics;
    }

    public function projectById($id) {
        $coding = Projects::find($id);
        return $coding;
    }
}
