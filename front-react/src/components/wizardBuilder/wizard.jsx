import React, { useState } from "react";
import Joi from "joi-browser";
import Header from "../common/header";
import Label from "../common/label";
import MyInput from "../common/myInput";
import Select from "../common/select";
import SubmitButton from "./submitButton";

// array of input types
const types = [
  { label: "text", value: "text" },
  { label: "date", value: "date" },
  { label: "email", value: "email" },
  { label: "tel", value: "tel" },
  { label: "number", value: "number" },
];

const Wizard = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const [inputType, setInputType] = useState(types[0].value);
  const [data, setData] = useState({
    fieldLabel: "",
    inputName: "",
  });

  const [formData, setFormData] = useState([{}]);

  const [formName, setFormName] = useState({});
  const [errors, setErrors] = useState({});

  //create schema to validate user input
  let schema = {
    fieldLabel: Joi.string().required().min(2).label("fieldLabel"),
    inputName: Joi.string().required().min(2).label("inputName"),
    inputType: Joi.string().label("inputType"),
  };

  //validate the user input using Joi
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  //validate the "next question" button..
  //while user input is not validate , the button is disabled
  let validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    //if there are errors , display them to the user
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // handle changed inputs on field label & input name
  function handleChange(event) {
    const { name, value } = event.target;
    const errorMessage = validateProperty(event.target);

    if (errorMessage) {
      errors[name] = errorMessage;
      setErrors(errors);
    } else delete errors[name];

    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function nextQuestion() {
    //get user data from the form
    let questionData = {
      questionNumber: questionNum,
      fieldLabel: data.fieldLabel,
      inputName: data.inputName,
      inputType: inputType,
    };
    //add the user data to array of objects in the state
    setFormData((questions) => [...questions, questionData]);

    //reset fields
    data.fieldLabel = "";
    data.inputName = "";
    setData(data);
    setInputType(types[0].value);

    //increment q number
    setQuestionNum(questionNum + 1);
  }

  function getFormName(event) {
    const { value } = event.target;
    setFormName({ "Form Name": value });
  }



  function submitForm() {
  //get user data from for the last question
  let questionData = {
    questionNumber: questionNum,
    fieldLabel: data.fieldLabel,
    inputName: data.inputName,
    inputType: inputType,
  };
  const {fieldLabel}=questionData;
  //check if user input is not empty
  if(fieldLabel!==""){
    setFormData((questions) => [...questions, questionData]);
     let formDetails=formData;
     //remove first element because its empty
     formDetails.shift();
     formDetails.formName=formName;
     console.log(formDetails);
  }
  //add the user data to array of objects in the state
 

    




    // formDetails={...formDetails, lastQuestion}
    // console.log(formDetails);
  }

  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <h4>
        Question number <span className="text-primary">{questionNum}</span>
      </h4>
      <div className="form-group col-4">
        <Label name="fieldLabel" label="Field Label" />
        <MyInput
          name="fieldLabel"
          type="text"
          value={data.fieldLabel}
          onChange={handleChange}
          error={errors.fieldLabel}
        />
      </div>
      <div className="form-group col-4">
        <Label name="inputName" label="Input Name" />
        <MyInput
          name="inputName"
          type="text"
          value={data.inputName}
          onChange={handleChange}
          error={errors.inputName}
        />
      </div>
      <Select
        name="inputType"
        label="Input Type"
        types={types}
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
      />
      <div className="button-group justify-content-between d-flex col-4 mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => nextQuestion()}
          disabled={validate()}
        >
          Next Question
        </button>
        {/* <SubmitButton/> */}
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          
        >
          Enter Form name
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Label name="formName" label="Please Select Form Name" />
              <MyInput
                name="formName"
                type="text"
                className="col-4"
                onChange={getFormName}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
