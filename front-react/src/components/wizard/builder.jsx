import React, { useState } from "react";
import Input from "../common/input";
import Form from '../common/form';

const Builder = () => {
  const [data, setData] = useState({
      email:"", pass:"",name:""
  });
  const [errors, setErrors]=useState({})
  const [questionNum, setQuestionNum] = useState(1);

 

  const addq = () => {
    setQuestionNum(questionNum + 1);
  };
  const back = () => {
    setQuestionNum(questionNum > 1 ? questionNum - 1 : questionNum);
  };

//   doSubmit=async()=>{
//       const data={...data};

//   }

 

//   function handleChange({ currentTarget: input }) {
//     const data = { ...data };
//     data[input.name] = input.value;
//     setData(data)
//     console.log(data);
//   }
  return (
    <div className="container mt-3">
      <div className="wizard border col-4">
        <p>question {questionNum}</p>
        <Input />
        <div className="btn justify-content-between d-flex">
          <button type="button  " onClick={back} className="btn btn-primary">
            back
          </button>
          <button type="button" onClick={addq} className="btn btn-primary">
            Add q
          </button>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={Form.handleSubmit} method="POST" autoComplete="off">
            {Form.renderInput("email", "Email", "email")} 
              {/* {Form.renderInput("password", "Password", "password")}
              {Form.renderInput("name", "Name")}
              {Form.renderButton("Next")} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
