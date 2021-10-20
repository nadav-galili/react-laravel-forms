import React, { useState } from "react";
import Joi from "joi-browser";
import Header from "../common/header";
import Label from "../common/label";
import MyInput from "../common/myInput";
import Select from "../common/select";
import axios from "axios";
import Swal from "sweetalert2";


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
    const [validateSubmit, setValidateSubmit] = useState(false);


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
        //validate the form because the user
        //submitted at least one question
        setValidateSubmit(true);

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
        setFormName({ form_name: value });
    }

    async function submitForm(event) {
        event.preventDefault();
        //check if the user entered form name min 2 chars
        if (!formName.form_name || formName.form_name.length < 2) {
            // alert("Please enter form name min 2 chars");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter form name min 2 chars",
                footer: "",
            });
                //if user does not pass validation on form name,return;
            return;
        }

        //get user data for the last question
        let questionData = {
            questionNumber: questionNum,
            fieldLabel: data.fieldLabel,
            inputName: data.inputName,
            inputType: inputType,
        };
        const { fieldLabel } = questionData;
        //check if user input is not empty & user submitted min 1 question
        if (fieldLabel !== "" && validateSubmit) {
            setFormData((questions) => [...questions, questionData]);
        }
        if (validateSubmit) {
            let formDetails = formData;
            if (formDetails.length > 1 && validateSubmit) {
                //remove first element because its empty
                formDetails.shift();

                //save the form name in the DB to get the form Id
                axios.post("/saveform", formName).then((response) => {
                    //map through the form data and save in the DB with the form id as parameter
                    formDetails.map((q) =>
                        axios.post(`/savequestions/${response.data}`, q)
                    );
                });
                //navigate to home directory
                window.location = "/";
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please submit min 1 question on the form ",
                    footer: "",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please submit min 1 question on the form ",
                footer: "",
            });
        }
    }

    return (
        <div className="container">
            <Header titleText="Form Builder" />
            <div className="formName col-lg-4 mb-2">
                <Label name="formName" label=" Form Name" />
                <MyInput
                    name="formName"
                    type="text"
                    className="col-4"
                    onChange={getFormName}
                />
            </div>

            <h4>
                Question number:{" "}
                <span className="text-primary">{questionNum}</span>
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
                    Submit question
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={submitForm}
                >
                    Submit Form
                </button>
            </div>
        </div>
    );
};

export default Wizard;
