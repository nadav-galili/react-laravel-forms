<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    
    protected $fillable=['formId', 'questionNumber', 'inputType', 'inputName', 'fieldLabel'];
}