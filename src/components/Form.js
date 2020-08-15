import React, { useState } from "react";
import { addNewData } from "../store/reducer";
import { useDispatch } from "react-redux";

const Form = () => {
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();

  const formHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewData(form));
  };

  console.log(form);
  return (
    <>
      <h2 className="text-center m-3">Type </h2>

      <form className="d-flex justify-content-around" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input
            type="text"
            className="form-control shadow"
            id="id"
            name="id"
            onChange={(e) => formHandler(e)}
            required
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control shadow"
            id="firstName"
            name="firstName"
            onChange={(e) => formHandler(e)}
            required
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control shadow"
            id="lastName"
            name="lastName"
            onChange={(e) => formHandler(e)}
            required
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control shadow"
            id="email"
            name="email"
            onChange={(e) => formHandler(e)}
            required
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control shadow"
            id="phone"
            name="phone"
            onChange={(e) => formHandler(e)}
            required
          />
        </div>
        <div className="form-group  align-self-end">
          <input type="submit" className="btn btn-dark shadow" placeholder="Add" />
        </div>
      </form>
    </>
  );
};

export default Form;
