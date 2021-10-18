<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    //
    public function forms(){
        $forms=Form::All();
        return $forms;
    }

    public function saveform(Request $request){
        $form=new Form();
        $form->form_name=$request->input('FormName');
        $form->save();
        
    }
    
}