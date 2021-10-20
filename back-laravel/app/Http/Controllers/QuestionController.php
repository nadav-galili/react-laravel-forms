<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Form;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    public function questionsByForm($form_id){
        $questions=Question::All()->where('form_id', $form_id);
        return $questions->toArray();
    }

    public function questions(){
        $questions=Question::All();
        return $questions->toJson;
    }

    public function savequestions(Request $request, $id){
         //validate user input
         $this->validate($request,
         ['questionNumber'=>'required|integer',
        'fieldLabel'=>'required|string|min:2',
        'inputName'=>'required|string|min:2',
        'inputType'=>'required|string|min:2',
        ]);
         
        $form=Form::find($id);
        $question=new Question();
        $question->questionNumber=$request->input('questionNumber');
        $question->fieldLabel=$request->input('fieldLabel');
        $question->inputName=$request->input('inputName');
        $question->inputType=$request->input('inputType');
        $form->questions()->save($question);
        return $form;
       
       
    }
}