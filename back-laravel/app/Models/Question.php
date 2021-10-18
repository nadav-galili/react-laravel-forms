<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    
    protected $fillable=['formId', 'question_number', 'input_type', 'input_name', 'field_label'];
}