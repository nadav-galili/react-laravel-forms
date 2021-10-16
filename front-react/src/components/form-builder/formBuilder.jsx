import React, { useState } from "react";
import Question from "./question";
//  import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';

const FormBuilder = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    fieldLabel: "enter field label",
    inputName: "enter field name",
    inputType: "ente field type",
  });

  // proceed to next question
  const nextStep = () => {
    setStep(step + 1);
  };
  // go back to previous question
  const prevStep = () => {
    setStep(step + 1);
  };
  // destructoring properties of values
  //   const { fieldLabel, inputName, inputType } = values;
  // handle fields change
  const handleChange = (input) => (e) => {
    setValues({ [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <div className="questionDiv container d-flex flex-column col-lg-4">
          <Question
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </div>
      );
    case 2:
      return (
        <div className="questionDiv container d-flex flex-column col-lg-4">
        <Question
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      </div>
      );
    case 3:
      return <h1>confirm</h1>;
    case 4:
      return <h1>success</h1>;
    default:
      return <h1>default</h1>;
  }
};

export default FormBuilder;
