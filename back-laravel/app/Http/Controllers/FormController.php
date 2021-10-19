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
        return $forms;
    }

    public function saveform(Request $request){
        $form=new Form();
        $form->form_name=$request->input('form_name');
        $form->save();
        return $form->_id;
    }
    
    public function formById($id){
        $form=Form::all()->where('_id', $id);
        $form_name=$form->pluck('form_name');
        return $form_name;
    }
}