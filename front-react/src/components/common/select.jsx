import React from "react";

const Select = ({ name, label,error, types}) => {

  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
   <select name={name} id={name} defaultValue="boom" >
    <option value="banana"  >banana</option>
        {/* {types.map(t => (
           <option value={t} key={t}>{t}</option>
        ))} */}
      </select>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Select;
