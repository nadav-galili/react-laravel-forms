import React from "react";
import Header from "../common/header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import TextError from "../common/textError";
import FormikControl from "../common/FormikControl";

const initialValues = {
    // question_1: "",
    text: "",
    email: "",
    tel: "",
    number: "",
    birthDate: null,
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
const FormSubmit = () => {
    return (
        <div className="container">
            <Header titleText="Forms Submit Page" />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
            >
                {(formik) => {
                    return (
                        <Form className="d-flex flex-column">
                            <FormikControl
                                control="input"
                                type="text"
                                label="Text label"
                                name="text"
                            
                            />
                            <FormikControl
                                control="input"
                                type="email"
                                label="Email label"
                                name="email"
                              
                            />
                            <FormikControl
                                control="input"
                                type="tel"
                                label="Tel label"
                                name="tel"
                            />
                            <FormikControl
                                control="input"
                                type="number"
                                label="Number label"
                                name="number"
                            />
                            <FormikControl
                                control="date"
                                label="pick a date"
                                name="birthDate"
                            />

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
