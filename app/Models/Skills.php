<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{
    public function classification()
    {
        return $this->belongsTo(Classification::class, 'id', 'classification');
    }
}
