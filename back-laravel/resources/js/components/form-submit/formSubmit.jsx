import React from "react";
import Header from "../common/header";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues={
    question_1:'',
    question_2:''
}

const onSubmit=values=>{
    console.log(values);
}

// const validate=values=>{
//     let errors={}
//     if(!values.question_1){
//         errors.question_1="Required"
//     }
//     if (!values.question_2){
//         errors.question_2='Required'
//     }
//     return errors;
// }

const validationSchema=Yup.object({
    question_1:Yup.string().required('Required'), 
    question_2:Yup.string().required('Required'), 

})
const FormSubmit = () => {
    const formik = useFormik({
        initialValues, onSubmit, validationSchema
     });

    return (
        <div className="container">
            <Header titleText="Forms Submit Page" />
            <div className="">
                <form action="" onSubmit={formik.handleSubmit}>
                   <div className="form-control">
                   <label htmlFor="Question_1"> question 1</label>
                    <input
                        type="question 1 type"
                        id="Question_1"
                        name="question_1"
                        onChange={formik.handleChange}
                        value={formik.values.question_1}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.question_1 && formik.errors.question_1?<div className="error">{formik.errors.question_1}</div>:null}
                   </div>

                 <div className="form-control">
                 <label htmlFor="Question_2"> question 2</label>
                    <input
                        type=" question 2 type"
                        id="Question_2"
                        name="question_2"
                        onChange={formik.handleChange}
                        value={formik.values.question_2}
                        onBlur={formik.handleBlur}
                    />
                           {formik.touched.question_2 && formik.errors.question_2?<div className="error">{formik.errors.question_2}</div>:null}
                 </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormSubmit;
