<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function experience(Request $request) {
        $data = Experience::orderBy('start_date', 'DESC')->where('is_active', 1)->get();
        return $data;
    }
    
    public function experienceById($id) {
        $data = Experience::find($id);
        return $data;
    }

    public function work(Request $request) {
        $data = Experience::where('type', 'work')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function education(Request $request) {
        $data = Experience::where('type', 'education')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
    
    public function volunteer(Request $request) {
        $data = Experience::where('type', 'volunteer')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
