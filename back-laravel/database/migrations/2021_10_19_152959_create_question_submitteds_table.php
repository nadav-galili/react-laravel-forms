<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionSubmittedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_submitteds', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('question_id')->unsigned();
            $table->bigInteger('submitted_form_id')->unsigned();
            $table->foreign('question_id')
                    ->refrences('id')
                    ->on('questions')
                    ->onDelete('cascade');
            $table->foreign('submitted_form_id')
                    ->refrences('id')
                    ->on('submitted_forms')
                    ->onDelete('cascade');        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('question_submitteds');
    }
}