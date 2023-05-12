<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('classification');
            $table->foreign('classification', 'education_ibfk_1')->references('id')->on('classifications')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->string('title');
            $table->string('institute');
            $table->string('icon');
            $table->string('gpa');
            $table->date('start_date');
            $table->date('end_date');
            $table->boolean('is_active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
}
