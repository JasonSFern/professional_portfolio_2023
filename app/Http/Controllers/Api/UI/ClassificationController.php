<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classification;

class ClassificationController extends Controller
{
    public function list(Request $request) {
        $data = Classification::all();
        return $data;
    }
}
