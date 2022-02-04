<?php

namespace App\Http\Controllers\Api\UI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Graphic;

/**
 * Class GraphicsController
 * @package App\Http\Controllers\Api\UI
 */
class GraphicsController extends Controller
{
    public function index(Request $request) {
        $graphics = Graphic::all();
        return $graphics;
    }

    public function graphicProject($id) {
        $graphics = Graphic::find($id);
        return $graphics;
    }
}
