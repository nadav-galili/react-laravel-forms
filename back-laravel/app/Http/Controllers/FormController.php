<?php

namespace App\Http\Controllers;
use App\Models\Form;
use App\Models\Question;
use Illuminate\Http\Request;

class FormController extends Controller
{
    //
    public function forms(){
        $forms=Form::All();
        // $formsubmitted=SubmittedForm::All()->where('form_id',$request->form_id)->count();
        return $forms;
    }

    public function saveform(Request $request){
        $this->validate($request,
        ['form_name'=>'required|min:4']);
        
        
        $form=new Form();
        $form->form_name=$request->input('form_name');
        $form->times_submitted=0;
        $form->save();
        return $form->_id;
    }
    
    public function formById($id){
        $form=Form::all()->where('_id', $id);
        $form_name=$form->pluck('form_name');
        return $form_name;
    }
}