import React from "react";
import { useForm } from "react-hook-form";
import Header from "../common/header";

const Wizard = () => {
  const types = ["text", "date", "email", "tel", "number"];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({mode: 'all'});
  const onSubmit = (data) => console.log(data);
  // console.log(watch("example")); // watch input value by passing the name of
  return (
    <div className="container">
      <Header titleText="Form Builder" />
      <div className="form col-lg-4 col-8 ">
      <form onSubmit={handleSubmit(onSubmit)} className="form d-flex flex-column" >
        <label htmlFor="fieldLabel">Field Label</label>
        <input {...register("fieldLabel", { required: true , minLength:2})} />
        {errors.fieldLabel && <span className="error">This field is required & min 2 chars</span>}

        <label htmlFor="inputName">Input Name</label>
        <input {...register("inputName", { required: true, minLength:2 })} />
        {errors.inputName && <span className="error">This field is required & min 2 chars</span>}

        <label htmlFor="inputType">Input Type</label>
        <select {...register("inputType")}>
        
          {types.map(t=><option key={t}>{t}</option>)}
        </select>
        {errors.inputType && <span>This field is required</span>}

        {/* <label htmlFor="formName">Form  Name</label>
        <input {...register("formName", { required: true, minLength:2 })} />
        {errors.inputName && <span className="error">This field is required & min 2 chars</span>} */}
        <button type="button" className="btn btn-secondary mt-3 col-8 col-lg-5">+Add another field</button>
        <input type="submit" className="btn btn-primary  mt-3 col-8 col-lg-5" value="Finished adding fields"/>
      </form>
      </div>
    
    </div>
  );
};

export default Wizard;
