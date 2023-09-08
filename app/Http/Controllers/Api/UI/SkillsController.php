<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;
use App\Models\Skill;

class SkillsController extends Controller
{
    public function list(Request $request) {
        $data = Skill::where('is_active', 1)->get()->groupBy('classification');
        $grouped = [];

        foreach($data as $id=>$group) {
            $classification = Classification::where('id', $id)->first();

            $grouped["{$classification->id}--{$classification->name}"] = $group;
        }
        
        return $grouped;
    }
    
    public function single($id) {
        $data = Skill::where('id', $id)->with('classification')->first();
        return $data;
    }
}
