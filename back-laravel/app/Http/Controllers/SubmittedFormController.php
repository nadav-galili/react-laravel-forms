<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Form;
use App\Models\SubmittedForm;
use Illuminate\Http\Request;

class SubmittedFormController extends Controller
{



    public function addSubmitted(){
        $questions=[
            ["question_id"=>"11111"],
            ["question_id"=>"22222"],
            ["question_id"=>"33333"],
       
           
        ];
        $submitteds=[
            ["answer"=>"pizza"],
            ["answer"=>"burger"],
            ["answer"=>"friez"],
        ];
     
        
    
        $sub=new SubmittedForm();
        $sub->questions=$questions;
        $sub->answers=$submitteds;
        $sub->form_id=999999;
        $sub->save();
        return $sub;
    }

    public function addquestion(){
        $form=Form::find('616dc42e420900000c002506');
        $question=new Question();
        $question->questionNumber=666;
        $question->inputType="text";
        $question->inputName="food";
        $question->fieldLabel="whats your favourite food?";
        $form->questions()->save($question);
        $question->save();
        
        $submitedid=[11111,22222];
        
        $question->submitted_forms()->attach($submitedid);
        return 'd';
        
        
        
    }




    
    public function saveSubmitted(Request $request , $form_id){
        $form=Form::find($form_id);
        $questions=$form->questions;
        $submitted=new SubmittedForm();
        $submitted->answers=$request->input('answers');
        // $form->submittedForms()->save($submitted);
        
        // $submitted->questions()->save($questions);
        // $form->submitted_forms()->save($submitted);
        return $form;
      
      
      
      
        // $form=Form::find($form_id);
        // $questions=$form->questions;
        
        // $submitted=new SubmittedForm();
        // $submitted->answers=$request->input('answers');
        
        // $form->submitted_forms()->save($submitted);
        // return $form;

        
    }

 
}