import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './textError';


const FormikInput = (props) => {
    const {label, name, ...rest}=props
    return (  
        <div className="form-control col-lg-4 col-10 d-flex flex-column m-1">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
}
 
export default FormikInput;