<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;
use App\Models\Skill;

class SkillsController extends Controller
{
    public function list(Request $request) {
        $data = Skill::orderBy('order', 'ASC')->with('classification')->where('is_active', 1)->get();
        return $data;
    }
    
    public function single($id) {
        $data = Skill::where('id', $id)->with('classification')->first();
        return $data;
    }

    public function coding(Request $request) {
        $classificationCodingId = Classification::where('name', 'Coding')->first()->id;

        $data = Skill::where('classification', $classificationCodingId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function design(Request $request) {
        $classificationDesignId = Classification::where('name', 'Design')->first()->id;

        $data = Skill::where('classification', $classificationDesignId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }

    public function ux(Request $request) {
        $classificationUxId = Classification::where('name', 'UX/UI')->first()->id;

        $data = Skill::where('classification', $classificationUxId)->with('classification')->where('is_active', 1)->orderBy('id', 'ASC')->get();
        return $data;
    }
}
