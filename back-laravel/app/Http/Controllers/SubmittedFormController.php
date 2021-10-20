<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Form;
use App\Models\SubmittedForm;
use Illuminate\Http\Request;

class SubmittedFormController extends Controller
{



    public function addSubmitted(Request $request){
        //get form id
        $form_id=$request->form_id;
        //q ids
        $form_questions=$request->questions;
        //get answers
        $answers=$request->answers;
        
        $submitted=new SubmittedForm();
        $submitted->form_id= $form_id;
        $submitted->questions=$form_questions;
        $submitted->answers=$answers;
        $submitted->save();
        return $submitted;
 
    }

    public function countSubmitted($form_id){
        
        $form=SubmittedForm::All()->where('form_id',$form_id )->count();
        return $form;
    }


}