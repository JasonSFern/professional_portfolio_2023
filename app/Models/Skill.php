<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'skills';
    
    public function classification()
    {
        return $this->belongsTo(Classification::class, 'classification', 'id');
    }
}
