<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyExperienceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('experience', function(Blueprint $table) {
            $table->renameColumn('institute', 'company');
            $table->dropColumn('icon');
            $table->unsignedInteger('classification')->after('id');
            $table->foreign('classification', 'experience_ibfk_1')->references('id')->on('classifications')->onUpdate('NO ACTION')->onDelete('NO ACTION');
          });
        }
        
        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
          Schema::table('experience', function(Blueprint $table) {
            $table->renameColumn('company', 'institute');
            $table->string('type')->after('company');
            $table->string('icon')->after('description');
            $table->dropForeign('experience_ibfk_1');
            $table->dropColumn('classification');
        });
    }
}
