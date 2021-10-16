import React from 'react';

const MyInput = ({name, ...rest}) => {
    return ( 
        <input {...rest} name={name} id={name} className="form-control" />
     );
}
 
export default MyInput;