<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Website;

/**
 * Class CodingController
 * @package App\Http\Controllers\Api\UI
 */
class CodingController extends Controller
{
    public function index(Request $request) {
        $coding = Website::all();
        return $coding;
    }

    public function codingProject($id) {
        $coding = Website::find($id);
        return $coding;
    }
}
