import React from "react";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Question = ({ nextStep,prevStep, handleChange, values }) => {
  const forward = (e) => {
    e.preventDefault();
    nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <React.Fragment>
      <TextField
        placeholder="Ent field label"
        floatingLabelText="field label"
        onChange={handleChange('fieldLabel')}
        defaultValue={values.fieldLabel}
      />
      <TextField
        placeholder="Ent field Name"
        floatingLabelText="field naaaaaaaa"
        onChange={handleChange('inputName')}
        defaultValue={values.inputName}
      />
      <TextField
        placeholder="Ent field Name"
        floatingLabelText="field typpppppppppp"
        onChange={handleChange('inputType')}
        defaultValue={values.inputType}
      />

      <br />
      <Button
        variant="contained"
        label="Add another question"
        primary={true}
        styles={styles.Button}
        onClick={forward}
      >
        Add another question
      </Button>
      <Button
        variant="contained"
        label="Add another question"
        primary={true}
        styles={styles.Button}
        onClick={back}
      >
        Back
      </Button>
    </React.Fragment>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default Question;
