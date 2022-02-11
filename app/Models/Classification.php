<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classification extends Model
{
    public function skill() {
        return $this->hasMany(Skills::class, 'classification', 'id');
    }
    
    public function project() {
        return $this->hasMany(Projects::class, 'classification', 'id');
    }

    public function experience() {
        return $this->hasMany(Experience::class, 'classification', 'id');
    }
}
