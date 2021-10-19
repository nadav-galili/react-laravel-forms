<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    protected $fillable=['form_name','submitions' ];

    protected $table='forms';
    
    public function questions(){
        return $this->hasMany(Question::class);
    }
    public function submitted(){
        return $this->hasMany(SubmittedForm::class);
    }
    
}