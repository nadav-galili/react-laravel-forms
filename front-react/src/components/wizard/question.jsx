import React,{useState} from 'react';

const Question = () => {
    const [questionNum, setQuestionNum] = useState(1);
    const addq = () => {
        setQuestionNum(questionNum + 1);
      };
      const back = () => {
        setQuestionNum(questionNum > 1 ? questionNum - 1 : questionNum);
      };
    return ( 
        <div className="btn justify-content-between d-flex">
        <button type="button  " onClick={back} className="btn btn-secondary">
          back
        </button>
        <button type="button" onClick={addq} className="btn btn-primary">
          Add q
        </button>
      </div>
     );
}
 
export default Question;