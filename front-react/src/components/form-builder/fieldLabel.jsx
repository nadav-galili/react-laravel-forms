import React from 'react';

const FieldLabel = ({fieldLabel}) => {
    return (  
        <label htmlFor={fieldLabel} className="text-primary">{fieldLabel}</label>
    );
}
 
export default FieldLabel;