import React, { useState } from "react";
import Wizard from "./wizard";
import Header from "../common/header";
// import Question from './question';

const FormBuilder = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const addq = () => {
    setQuestionNum(questionNum + 1);
  };
  const back = () => {
    setQuestionNum(questionNum > 1 ? questionNum - 1 : questionNum);
  };

  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <div className="col-12">
        <p>Question Number <strong>{questionNum}</strong> </p>
      </div>

      <div className="btn d-flex">
        <button type="button" onClick={back} className="btn btn-secondary me-2 ">
          back
        </button>
        <button type="button" onClick={addq} className="btn btn-primary">
          Add Question
        </button>
      </div>
      <Wizard questionNum={questionNum} />
    </div>
  );
};

export default FormBuilder;
