import React from 'react';

const MyInput = ({name,error, ...rest}) => {
    return ( 
        <React.Fragment>
        <input {...rest} name={name} id={name} className="form-control" />
         {error && <span className="text-danger">{error}</span>}
         </React.Fragment>
        );
}
 
export default MyInput;