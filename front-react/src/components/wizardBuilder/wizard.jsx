import React, { useState } from "react";
import Joi from "joi-browser";
import Header from "../common/header";
import Label from "../common/label";
import MyInput from "../common/myInput";
import Select from "../common/select";

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
  const [inputType, SetInputType] = useState(types[0].value);
  const [data, setData] = useState({
    fieldLabel: "",
    inputName: "",
  });
  const [errors, setErrors] = useState({});

  //create schema to validate user input
  let schema = {
    fieldLabel: Joi.string().required().min(2).label("fieldLabel"),
    inputName: Joi.string().required().min(2).label("inputName"),
    inputType: Joi.string().label("inputType"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  
  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // handle changed inputs on field label & input name
  function handleChange(event) {
    const { name, value } = event.target;
    const errorMessage = validateProperty(event.target);
    console.log(errorMessage, "ff");
    if (errorMessage){
        errors[name] = errorMessage;
        setErrors(errors)
        console.log("t",errors);
    }
     else delete errors[name];
    
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  // create a new array to insert the state data to
  let questions = [];

  function nextQuestion() {
    let existingQuestions = JSON.parse(localStorage.getItem("Questions"));
    // create an object from the user inputs
    let questionData = {
      "question number": questionNum,
      fieldLabel: data.fieldLabel,
      inputName: data.inputName,
      inputType: inputType,
    };

    if (existingQuestions == null) {
      //if theres no questions in local storage  push the object to the array
      questions.push(questionData);
      localStorage.setItem("Questions", JSON.stringify(questions));
    } else {
      //if there were previous questions,
      //get the array thaat holds the questions object and push the new
      //question into it
      existingQuestions.push(questionData);
      localStorage.setItem("Questions", JSON.stringify(existingQuestions));
    }

    //  add 1 to question number and reset values for fields
    setQuestionNum(questionNum + 1);
    data.fieldLabel = "";
    data.inputName = "";
    SetInputType(types[0].value);
  }
 
  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <h4>Question number {questionNum}</h4>
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
        onChange={(e) => SetInputType(e.target.value)}
      />
      <div className="button-group justify-content-between d-flex col-4 mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            setQuestionNum(questionNum > 1 ? questionNum - 1 : questionNum)
          }
        >
          Prev Question
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => nextQuestion()}
          disabled={validate()}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Wizard;
