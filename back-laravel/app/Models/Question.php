<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $table="questions";
    
    protected $fillable=['formId', 'questionNumber', 'inputType', 'inputName', 'fieldLabel'];

    public function form(){
        return $this->belongsTo(Form::class);
    }
    
    public function submitted_forms(){
        return $this->belongsToMany(SubmittedForm::class, 'question_submitteds');
    }

}