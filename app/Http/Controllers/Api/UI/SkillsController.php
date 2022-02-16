<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skills;

class SkillsController extends Controller
{
    public function skills(Request $request) {
        $data = Skills::orderBy('skill_level', 'DESC')->where('is_active', 1)->get();
        return $data;
    }
    
    public function skillById($id) {
        $data = Skills::find($id);
        return $data;
    }

    public function codingSkills(Request $request) {
        $data = Skills::where('classification', 1)->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function designSkills(Request $request) {
        $data = Skills::where('classification', 2)->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
