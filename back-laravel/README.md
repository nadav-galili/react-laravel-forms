


## Laravel React Form App By Nadav Galili

![Forms List](https://github.com/nadav-galili/react-laravel-forms/blob/main/back-laravel/public/images/laravel.JPG)
![Forms Builder](https://github.com/nadav-galili/react-laravel-forms/blob/main/back-laravel/public/images/laravel%202.JPG)
![Forms Submit](https://github.com/nadav-galili/react-laravel-forms/blob/main/back-laravel/public/images/laravel%203.JPG)
## Requirments -
* PHP >=8.0
* mongodb php extension
* laravel >=8.0

## DataBase-MongoDB
## Dependencies

* bootstrap
* jquery
* popper.js
* react-dom
* axios
* joi-browser
* react-router-dom
* sweetalert2
* yup

## Run
To build the code and run the app please type:

npm i && npm run serve && npm run watch

# App Workflow
* The react App is implemented inside laravel
* Forms List page-make an API call to get all the forms in the db
(name, ids asnd number of times submitted)
* cast the forms obj to arr so i can map through and display each form
* The view button gets each form id to set as a parameter for a dynamic route to lead to the form submit page/

* The form builder page sets a form and validate each input the user enters 
(both client and server) and saves it as an object in the component state.
* when the submit form button is clicked , an API call is made to save
the form name to the db and gets back the form id from the db.

* the id is used as a parameter to make a post request to save the questions with a one (form) to many (questions) relationship.
* after the submit , we run window location to get back to forms list.

* Forms Submit Page-Make an API call to db to get all the questions that have this form's id as a foreign key and map all the questions to display each question.
* when the user click the submit button,validate the fields & collect all the answers (from the component state) and store all the data in a "submitted form model" in the db
where you can get all the form details in this model ( form id as a foreign key, 
questions id's and the answer the user enterd)
also, each time a form is submitted , the "number submitted" property
in the original form is incremented by one.



## Thank you
