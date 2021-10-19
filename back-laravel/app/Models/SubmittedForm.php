<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class SubmittedForm extends Model
{
    use HasFactory;
    protected $table="submittedForms";
    
    protected $fillable=['formId', 'questions', 'answers'];

    protected $casts=[
        'questions'=>'array', 
        'answers'=>'array'
    ];
    public function form(){
        return $this->belongsTo(Form::class);
    }
    
    public function questions(){
        return $this->belongsToMany(Question::class, 'question_submitteds');
    }
}