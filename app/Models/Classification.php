<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classification extends Model
{
    public function skill() {
        return $this->hasMany(Skill::class, 'id', 'classification');
    }
    
    public function project() {
        return $this->hasMany(Project::class, 'id', 'classification');
    }

    public function experience() {
        return $this->hasMany(Experience::class, 'id', 'classification');
    }

    public function education() {
        return $this->hasMany(Education::class, 'id', 'classification');
    }
}
