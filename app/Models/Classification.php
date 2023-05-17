<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classification extends Model
{
    public function skill() {
        return $this->hasMany(Skill::class, 'classification', 'id')->where('is_active', 1);
    }
    
    public function project() {
        return $this->hasMany(Project::class, 'classification', 'id')->where('is_active', 1);
    }

    public function experience() {
        return $this->hasMany(Experience::class, 'classification', 'id')->where('is_active', 1);
    }

    public function education() {
        return $this->hasMany(Education::class, 'classification', 'id')->where('is_active', 1);
    }
}
