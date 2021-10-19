import React from 'react';
import DatePicker from './datePicker';
import FormikInput from './formikInput';

const FormikControl = (props) => {
    const {control, ...rest}=props
    switch (control){
        case 'input':
        return <FormikInput {...rest}/>
        case 'date':
           return   <DatePicker {...rest}/>
        default:return null
    }

}
 
export default FormikControl;