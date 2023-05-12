<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;
use App\Models\Education;

class EducationController extends Controller
{
    public function list(Request $request) {
        $data = Education::orderBy('start_date', 'DESC')->with('classification')->where('is_active', 1)->get();
        return $data;
    }
    
    public function single($id) {
        $data = Education::where('id', $id)->with('classification')->first();
        return $data;
    }

    public function degree(Request $request) {
        $classificationDegreeId = Classification::where('name', 'Degree')->first()->id;
        
        $data = Education::where('classification', $classificationDegreeId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
      
    public function certificate(Request $request) {
        $classificationCertificateId = Classification::where('name', 'Certificate')->first()->id;
        
        $data = Education::where('classification', $classificationCertificateId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
