<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Form;
use App\Models\SubmittedForm;
use Illuminate\Http\Request;

class SubmittedFormController extends Controller
{
    //
    public function saveSubmitted(Request $request , $form_id){
        $form=Form::find($form_id);
        $questions=$form->questions;
        
        $submitted=new SubmittedForm();
        $submitted->answers=$request->input('answers');
        
        $form->submitted_forms()->save($submitted);
        return $form;
        // $question=Question::find($question_id);
        // $questions=foreach($questio)
        
        // $submitted=new SubmittedForm();
        
    }
}