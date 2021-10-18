<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;

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



//get all the forms
Route::get('/forms', [FormController::class, 'forms']);
//create a new form
Route::post('/saveform', [FormController::class, 'saveform']);
//get form by id
Route::get('/forms/{id}', [FormController::class, 'formById']);
Route::post('/createform',[FormController::class, 'form']);

//create a new questions instance
Route::post('/savequestions', [QuestionController::class, 'savequestions']);
//get questions by formid
Route::get('/questionsByForm/{formId}',[QuestionController::class, 'questionsByForm']);
//get all questions/savequestions
Route::get('/questions',[QuestionController::class, 'questions'] );

Route::get('/', function () {
    return view('welcome');
});