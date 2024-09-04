
import React , { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Validation from '../ValidationComp/LoginValidation';
import axios from "axios"

function AdminFragenmanagement() {
 
 
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    
    userFirst_name: "",
    usersLast_name: "",
    email:"",
    usersPassword: "",
    usersGeburtsjahr: "null"
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validation(values));
    if (true) {
      axios
        .post("http://localhost:8800/signIn", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      
      <h1 style={{ fontFamily: "cursive" }}>
      Benutzerverwaltung
      </h1>
      <form onSubmit={handleSubmit}>
      
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Firs Name</label>
        <input type="text"
                name="userFirst_name"
                className="form-control"
                onChange={handleInput} />
      </div>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Last Name</label>
        <input type="text"
                name="usersLast_name"
                className="form-control"
                onChange={handleInput} />
      </div>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">E-mail</label>
        <input type="email"
                name="email"
                className="form-control"
                onChange={handleInput} />
      </div>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Password:</label>
        <input type="password"
                name="usersPassword"
                className="form-control"
                onChange={handleInput} />
      </div>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Gebusrtjahr</label>
        <input type="number"
                name="usersGeburtsjahr"
                className="form-control"
                onChange={handleInput} />
      </div>
      <button style={{float:"left"}} type="submit" class="btn btn-primary btn-lg">Sign In</button>
      
      </form>

    </div>
  );
}

export default AdminFragenmanagement;

