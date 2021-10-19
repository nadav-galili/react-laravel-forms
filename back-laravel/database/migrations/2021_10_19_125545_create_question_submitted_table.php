<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionSubmittedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_submitted', function (Blueprint $table) {
            $table->id();
            $table->integer('question_id')->unsigned();
            $table->integer('submitted_form_id')->unsigned();
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
        Schema::dropIfExists('question_submitted');
    }
}