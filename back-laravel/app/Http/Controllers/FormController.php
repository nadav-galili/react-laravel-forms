<?php

namespace App\Http\Controllers;
use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    //
    public function forms(){
        $forms=Form::All();
        return $forms->toJson();
    }

    public function saveform(Request $request){
        // $form=new Form();
        // $form->form_name=$request->input('form_name');
        // $form->save();
        // return $form->toJson();
        // dd($request->getAcceptableContentTypes(););
     
        return $request;
        
    }
    
    public function form(Request $request){
//    dd($request);
return $request;
    }
}