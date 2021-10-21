import React, { useState, useEffect } from "react";
// import {useForm} from "react-hook-form";

import Joi from "joi-browser";
import Header from "../common/header";
import Label from "../common/label";
import MyInput from "../common/myInput";
import axios from "axios";

const SubmitForms = (props) => {
    const [formName, setFormName] = useState("");
    //form questions in arr so i can map them
    const [formQuestions, setFormQuestions] = useState([]);
    //the answers the user enters on the form
    const [data, setData] = useState({});

    
    //form questions in an object to save to db
    const [questions, setQuestions] = useState({});
    const [formid, setFormid] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        // validateProperty(name, value )
        setData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        let request = {};
        request.form_id = formid;
        request.questions = questions;
        request.answers = data;

        axios.post("/addsubmitted", request);
        window.location='/';
    };

    useEffect(() => {
        const getFormDetails = async () => {
            let formId = props.match.params.id;
            setFormid(formId);

            let questions = await axios
                .get(`/questionsByForm/${formId}`)
                .then((response) => {
                    setQuestions(response.data);
                    let questions = Object.entries(response.data);
                    setFormQuestions(questions);
                });
            let formName = await axios
                .get(`/forms/${formId}`)
                .then((response) => {
                    setFormName(response.data);
                });
        };
        getFormDetails();
    }, []);

    return (
        <div className="container">
            <Header titleText={formName} />
            <form onSubmit={submitForm}>
                {formQuestions.map((question) => (
                    <div className="form-group col-4" key={question[1]._id}>
                        <Label
                            name={question[1].inputName}
                            label={question[1].fieldLabel}
                        />
                        <MyInput
                            name={question[1].inputName}
                            type={question[1].inputType}
                            required
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    onClick={submitForm}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SubmitForms;
