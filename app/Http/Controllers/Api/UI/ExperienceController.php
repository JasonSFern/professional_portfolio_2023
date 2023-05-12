<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function list(Request $request) {
        $data = Experience::orderBy('start_date', 'DESC')->with('classification')->where('is_active', 1)->get();
        return $data;
    }
    
    public function single($id) {
        $data = Experience::where('id', $id)->with('classification')->first();
        return $data;
    }

    public function work(Request $request) {
        $classificationWorkId = Classification::where('name', 'Work')->first()->id;
        
        $data = Experience::where('classification', $classificationWorkId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
      
    public function volunteer(Request $request) {
        $classificationVolunteerId = Classification::where('name', 'Volunteer')->first()->id;

        $data = Experience::where('classification', $classificationVolunteerId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
