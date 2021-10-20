import React, { useEffect, useState } from "react";
import Header from "../common/header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../common/FormikControl";
// import questionService from "../../../services/questionService";
import axios from "axios";
import { initial } from "lodash";

//  const initialValues= async function(){
//     await initial    
//  }

 console.log(initialValues, "34");

const onSubmit = (values) => {
    console.log(values);
};

const validationSchema = Yup.object({
    text: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    tel: Yup.number().required("Required"),
    number: Yup.number().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
});
const FormSubmit = (props) => {
    const [formName, setFormName] = useState("");
    const [formQuestions, setFormQuestions] = useState([]);
    const [initial, setInitial] = useState({});
    useEffect(() => {
        const getFormDetails = async () => {
            let formId = props.match.params.id;

            let questions = await axios
                .get(`/questionsByForm/${formId}`)
                .then((response) => {
                    let questions = Object.entries(response.data);
                    setFormQuestions(questions);

                    questions.map((q) => (initial[q[1].inputName] = ""));
                    setInitial(initial);
                    console.log(initial, "ds");
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
            <Header titleText="Forms Submit Page" />
            <h3>
                Form Name : <span className="text-primary">{formName}</span>
            </h3>
            <Formik
                // enableReinitialize={true}
                initialValues={initialValues }
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => {
                    console.log(formik);
                    return (
                        <Form className="d-flex flex-column">
                            {formQuestions.length > 1 &&
                                formQuestions.map((question) => (
                                    <FormikControl
                                        control="input"
                                        type={question[1].inputType}
                                        label={question[1].fieldLabel}
                                        name={question[1].inputName}
                                        key={question[1]._id}
                                    />
                                ))}
                 

                            <button
                                type="submit"
                                className="btn btn-primary mt-4 col-lg-1 col-4"
                                disabled={!formik.isValid}
                            >
                                submit
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default FormSubmit;
