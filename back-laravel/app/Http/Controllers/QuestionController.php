<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    public function questionsByForm($form_id){
        $questions=Questions::All()->where('form_id', $form_id);
        return $questions->toJson();
    }
}