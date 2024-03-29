<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';

    public function classification()
    {
        return $this->belongsTo(Classification::class, 'classification', 'id');
    }
}
