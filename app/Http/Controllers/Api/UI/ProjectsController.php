<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;
use App\Models\Project;

class ProjectsController extends Controller
{
    public function list(Request $request) {
        $data = Project::where('is_active', 1)->with('classification')->get();
        return $data;
    }
    
    public function single($id) {
        $data = Project::where('id', $id)->with('classification')->first();
        
        return $data;
    }

    public function coding(Request $request) {
        $classificationCodingId = Classification::where('name', 'Coding')->first()->id;
        
        $data = Project::where('classification', $classificationCodingId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
      }
      
    public function design(Request $request) {
        $classificationDesignId = Classification::where('name', 'Design')->first()->id;
        
        $data = Project::where('classification', $classificationDesignId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function ux(Request $request) {
        $classificationUxId = Classification::where('name', 'UX/UI')->first()->id;

        $data = Project::where('classification', $classificationUxId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
