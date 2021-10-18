<?php

namespace App\Http\Controllers;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    public function questionsByForm($form_id){
        $questions=Questions::All()->where('form_id', $form_id);
 
        return $questions->toJson();
    }

    public function questions(){
        $questions=Question::All();
        return $questions->toJson;
    }

    public function savequestions(Request $request){
        $question=new Question();
        $question->questionNumber=$request->input('questionNumber');
        $question->fieldLabel=$request->input('fieldLabel');
        $question->inputName=$request->input('inputName');
        $question->inputType=$request->input('inputType');
        $question->save();
        return $question->toJson();
        // dd($request->all());
    }
}