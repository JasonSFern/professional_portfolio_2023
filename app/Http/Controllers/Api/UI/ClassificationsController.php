<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Classifications;

class ClassificationsController extends Controller
{
    public function classifications(Request $request) {
        $data = Classifications::all();
        return $data;
    }
}
