import React from "react";

const Select = ({ name, label, types , onChange, value}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} value={value}>
        {types.map((t) => (
          <option value={t.value} key={t.label}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
