import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../common/header";

const Wizard = () => {
  const types = ["text", "date", "email", "tel", "number"];
  const [counter, setCounter] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const onSubmit = (data) => console.log(data);

  function addQuestion() {
    setCounter(counter + 1);
  }
  function removeQuestion() {
    setCounter(counter > 0 ? counter - 1 : counter);
  }
  let question = 2;
  // console.log(watch("example")); /
  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <div className="questions">
        <button
          onClick={addQuestion}
          type="button"
          className="btn btn-primary  col-3 col-lg-1  me-2"
        >
          <i className="fas fa-plus-circle"></i> Question
        </button>
        <button
          onClick={removeQuestion}
          type="button"
          className="btn btn-secondary    col-3 col-lg-1 "
        >
          <i className="fas fa-minus-circle"></i> Question
        </button>
      </div>

      <div className="form col-lg-4 col-8 d-flex mt-3 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form d-flex flex-column flex-fill"
        >
          <p className="bg-info col-lg-3">Question No.1</p>
          <label htmlFor="fieldLabel" className="text-primary ">
            Field Label
          </label>
          <input
            {...register("fieldLabel", { required: true, minLength: 2 })}
          />
          {errors.fieldLabel && (
            <span className="error">This field is required & min 2 chars</span>
          )}

          <label htmlFor="inputName" className="text-primary">
            Input Name
          </label>
          <input {...register("inputName", { required: true, minLength: 2 })} />
          {errors.inputName && (
            <span className="error">This field is required & min 2 chars</span>
          )}

          <label htmlFor="inputType" className="text-primary">
            Input Type
          </label>
          <select {...register("inputType")}>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {errors.inputType && <span>This field is required</span>}

          {/* <label htmlFor="formName">Form  Name</label>
        <input {...register("formName", { required: true, minLength:2 })} />
        {errors.inputName && <span className="error">This field is required & min 2 chars</span>} */}

          <input id="submit" type="submit" className="btn btn-primary  mt-3 col-8 col-lg-5" value="Finished adding fields"/>
        </form>
      </div>

      {[...Array(counter)].map((e, i) => (
        <div className="form col-lg-4 col-8 mb-4" key={i}>
          <p className="mt-3 bg-info col-lg-3">Question no. {question++}</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form d-flex flex-column"
          >
            <label htmlFor="fieldLabel" className="text-primary">
              Field Label
            </label>
            <input
              {...register("fieldLabel", { required: true, minLength: 2 })}
            />
            {errors.fieldLabel && (
              <span className="error">
                This field is required & min 2 chars
              </span>
            )}

            <label htmlFor="inputName" className="text-primary">
              Input Name
            </label>
            <input
              {...register("inputName", { required: true, minLength: 2 })}
            />
            {errors.inputName && (
              <span className="error">
                This field is required & min 2 chars
              </span>
            )}

            <label htmlFor="inputType" className="text-primary">
              Input Type
            </label>
            <select {...register("inputType")}>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            {errors.inputType && <span>This field is required</span>}
          </form>
        </div>
      ))}
    </div>
  );
};

export default Wizard;
