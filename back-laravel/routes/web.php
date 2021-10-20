<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SubmittedFormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/addsubmitted', [SubmittedFormController::class, 'addSubmitted']);
Route::get('/addquestion', [SubmittedFormController::class,'addquestion']);



//get all the forms
Route::get('/forms', [FormController::class, 'forms']);
//create a new form
Route::post('/saveform', [FormController::class, 'saveform']);
//get form by id
Route::get('/forms/{id}', [FormController::class, 'formById']);


//create a new questions instance with form id as parameter
Route::post('/savequestions/{id}', [QuestionController::class, 'savequestions']);
// //get questions by formid
 Route::get('/questionsByForm/{formId}',[QuestionController::class, 'questionsByForm']);
//get all questions/savequestions
Route::get('/questions',[QuestionController::class, 'questions'] );


Route::post('/submitted-forms/{formId}', [SubmittedFormController::class, 'saveSubmitted']);
Route::get('/', function () {
    return view('welcome');
});