import React, { useState, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Label from "../common/label";
import axios from "axios";
import Header from "../common/header";

export default function Submit(props) {
    const [formName, setFormName] = useState("");

    //form questions in arr so i can map them
    const [formQuestions, setFormQuestions] = useState([]);

    //form questions in an object to save to db
    const [questions, setQuestions] = useState({});
    const [formid, setFormid] = useState("");

//when the user press the submit button, collect the data
//from the form & make an object with the questions & form name
//then, send a post request to the API to save to DB
    const onSubmit = (data) => {
        let request = {};
        request.form_id = formid;
        request.questions = questions;
        request.answers = data;
       
        axios.post("/addsubmitted", request);
        window.location = "/";
    };

    useEffect(() => {
        //get the form id from the location
        const getFormDetails = async () => {
            let formId = props.match.params.id;
            setFormid(formId);
            //get the questions for the form by the form id
            let questions = await axios
                .get(`/questionsByForm/${formId}`)
                .then((response) => {
                    setQuestions(response.data);
                    let questions = Object.entries(response.data);
                    setFormQuestions(questions);
                });
                //get the form name from the db with the form id
            let formName = await axios
                .get(`/forms/${formId}`)
                .then((response) => {
                    setFormName(response.data);
                });
        };
        getFormDetails();
    }, []);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Header titleText={formName} />
                {/* map the questions to create each questions label and input */}
                {formQuestions.map((question) => (
                    <div className="form-group col-4" key={question[1]._id}>
                        <Label
                            name={question[1].inputName}
                            label={question[1].fieldLabel}
                        />

                        <input
                            className="form-control"
                            name={question[1].inputName}
                            type={question[1].inputType}
                            {...register(`${question[1].inputName}`, {
                                required: "This input is required.",
                                minLength: {
                                    value: 2,
                                    message:
                                        "This input must exceed 1 characters",
                                },
                            })}
                        />
                        <ErrorMessage
                            errors={errors}
                            name={`${question[1].inputName}`}
                            render={({ messages }) => {
                                return messages
                                    ? Object.entries(messages).map(
                                          ([type, message]) => (
                                              <p
                                                  className="text-danger"
                                                  key={type}
                                              >
                                                  {message}
                                              </p>
                                          )
                                      )
                                    : null;
                            }}
                        />
                    </div>
                ))}

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
}
