import React, { useEffect, useState } from "react";
import Header from "../common/header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from "../common/FormikControl";
// import questionService from "../../../services/questionService";
import axios from "axios";

const initialValues = {
    // question_1: "",
    // text: "",
    // email: "",
 
    
};

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

    const [formName, setFormName]=useState("");
    const [formQuestions, setFormQuestions]=useState([]);
    useEffect(()=>{
        const getFormDetails=async ()=>{
            let formId=props.match.params.id
            let questions=await axios.get(`/questionsByForm/${formId}`).then(
                (response)=>{
                    let questions=Object.entries(response.data)
                    setFormQuestions(questions);
                    console.log(questions,'ds');
                 
                }
            )
            let formName=await axios.get(`/forms/${formId}`).then(
                response=>{
                    console.log(response.data, "name");
                    setFormName(response.data);
                }
            )
        };
        getFormDetails();
    }, [])

    
    return (
        <div className="container">
            <Header titleText="Forms Submit Page" />
            <h3>Form Name : <span className="text-primary">{formName}</span></h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >
                {(formik) => {
                    return (
                        <Form className="d-flex flex-column">
                         {formQuestions.length>1&&(
                           formQuestions.map(question=>(
                               <FormikControl
                               control="input"
                               type={question[1].inputType}
                                label={question[1].fieldLabel}
                               name={question[1].inputName}
                               key={question[1]._id}
                           /> 
                           ))
                         )}
                     {/* {
                         questionsarr?questionsarr.map(q=>(
                          
                         )):null
                     } */}
                     
                        
                        
                            {/* {formQuestions && (
                                formQuestions.map((question)=>(
                                    <FormikControl
                                    control="input"
                                    type="text"
                                    label={question.fieldLabel}
                                    name="text"
                                />       
                                ))
                            )} */}
                            
                      

                        

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
