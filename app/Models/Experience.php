<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $table = 'experience';

    public function classification()
    {
        return $this->belongsTo(Classification::class, 'classification', 'id');
    }
}
