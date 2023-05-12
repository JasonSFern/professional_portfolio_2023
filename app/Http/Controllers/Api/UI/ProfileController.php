<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function get(Request $request) {
        $data = Profile::first();
        return $data;
    }
}
