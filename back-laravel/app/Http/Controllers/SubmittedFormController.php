<?php

namespace App\Http\Controllers;
use App\Models\Question;
use App\Models\Form;
use App\Models\SubmittedForm;
use Illuminate\Http\Request;

class SubmittedFormController extends Controller
{



    public function addSubmitted(Request $request){   
     //validate user input
    //  $this->validate($request,
    //  ['questions'=>'required|string',
    // 'answers'=>'required|string',
    // ]);
        //getting the no of times the form was
        // submitted and increment by 1
        $form_id=$request->form_id;
        $form=Form::find($form_id);
        $form->times_submitted++;
        $form->save();
        

        
        $submitted=new SubmittedForm();
        $submitted->form_id=$form_id;
        //get the questions
        $submitted->questions=$request->input('questions');
        //get answers
        $submitted->answers=$request->input('answers');
        $submitted->save();

        return  $submitted;
 
    }

    public function countSubmitted($form_id){
        //count the form that were submitted to this form id
        $form=SubmittedForm::All()->where('form_id',$form_id )->count();
        return $form;
    }


}