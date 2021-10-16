import React, { useState } from "react";
import Header from "../common/header";
import Label from "../common/label";
import MyInput from "../common/myInput";
import Select from "../common/select";

const types = [
  { label: "text", value: "text" },
  { label: "date", value: "date" },
  { label: "email", value: "email" },
  { label: "tel", value: "tel" },
  { label: "number", value: "number" },
];



const Wizard = () => {
  const [questionNum, setQuestionNum] = useState(1);
  const [inputType, SetInputType] = useState(types[0].value);
const [data, setData] = useState({
    fieldLabel:"", 
    inputName:"",
})

function handleChange(event){
    const { name, value } = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
 }

 function nextQuestion(){
    setQuestionNum(questionNum + 1);
    data.fieldLabel="";
    data.inputName="";
    SetInputType(types[0].value)
 }
  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <h4>Question number {questionNum}</h4>
      <div className="form-group col-4">
        <Label name="fieldLabel" label="Field Label" />
        <MyInput name="fieldLabel"
         type="text" 
         value={data.fieldLabel}
         onChange={handleChange} />
      </div>
      <div className="form-group col-4">
        <Label name="inputName" label="Input Name" />
        <MyInput name="inputName" 
        type="text"
        value={data.inputName}
        onChange={handleChange}/>
      </div>
      <Select
        name="inputType"
        label="Input Type"
        types={types}
        value={inputType}
        onChange={(e) => SetInputType(e.target.value)}
      />
      <div className="button-group justify-content-between d-flex col-4 mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            setQuestionNum(questionNum > 1 ? questionNum - 1 : questionNum)
          }
        >
          Prev Question
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>nextQuestion() }
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Wizard;
