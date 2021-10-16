import React from "react";

import Joi from "joi-browser";
import Form from "../common/form";
// import http from "../services/httpService";
// import { apiUrl } from "../config/config.json";
// import { toast } from "react-toastify";
// import userService from "../services/userService";
// import { Redirect } from "react-router-dom";


class Wizard extends Form {
  state = {
    data: { fieldLabel: "", inputName: "", inputType: "text" },
    errors: {},
    question:{
      questionNum:this.props.questionNum, data:{ fieldLabel: "", inputName: "", inputType: "text" }
    },
    questionNum:this.props.questionNum
  };

  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
  }
  schema = {
    fieldLabel: Joi.string().required().min(2).label("fieldLabel"),
    inputName: Joi.string().required().min(2).label("inputName"),
    inputType: Joi.string().label("inputType"),
  };

  selectChange(e) {
    const data = { ...this.state.data };
    data.inputType = e.target.value;
    // this.setState({ data });
    this.setState({data})
  }

  doSubmit = async () => {
    const data = { ...this.state.data };
    const questionNum=this.props.questionNum
   

    try {
      console.log("myasdsdsd", data, questionNum);
      //   await http.post(`${apiUrl}/users`, data);
      //   await userService.login(data.email, data.password);
      //   window.location = "/create-card";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: "Email is taken" } });
      }
    }
  };

  render() {
    const types = [
      { label: "text", value: "text" },
      { label: "date", value: "date" },
      { label: "email", value: "email" },
      { label: "tel", value: "tel" },
      { label: "number", value: "number" },
    ];

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
              {this.renderInput("fieldLabel", "Field Label", "fieldLabel")}
              {this.renderInput("inputName", "Input Name", "inputName")}
              <div className="form-group">
              <label htmlFor="inputType">Input Type</label><br />
              <select
              className="mb-2"
                name="inputType"
                id="inputType"
                value={this.state.data.inputType}
                onChange={this.selectChange}
              >
                {types.map((t) => (
                  <option value={t.value} key={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              </div>
           
              {this.renderButton("Submit Form")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
