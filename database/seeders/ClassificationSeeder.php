<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ClassificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('classifications')->insert([
            [
              'name' => 'Coding',
              'type' => 'project',
            ],
            [
              'name' => 'Graphics',
              'type' => 'project',
            ],
            [
              'name' => 'UX/UI',
              'type' => 'project',
            ],
            [
              'name' => 'Front-End',
              'type' => 'skill',
            ],
            [
              'name' => 'Back-End',
              'type' => 'skill',
            ],
            [
              'name' => 'Mobile',
              'type' => 'skill',
            ],
            [
              'name' => 'E-Commerce',
              'type' => 'skill',
            ],
            [
              'name' => 'Design',
              'type' => 'skill',
            ],
        ]);
    }
}
