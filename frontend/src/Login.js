import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Validation from "./LoginValidation"
 

function Login() {
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const handleInput =(e)=>{
        setValues(prev => ({...prev,[e.target.name]:[e.target.value]}))
    } 
    const onSubmit =(e) =>[
        e.preventDefault()

        

    ]

  return (
    <div>
        
      <div style={{padding:"20%"}} className="row ">
     
        <div className="col"></div>
        <div style={{padding:"3%"}} className="col align-self-center border border-secondary" >
          <form action="" onSubmit={handleSubmit}> <h2>Sign-In</h2>
            <div style={{textAlign:"left"}}  className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInput}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div style={{textAlign:"left"}}   className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleInput}
              />
            </div>
         
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p></p>
            <Link to="/signup"><button type="submit" className="btn btn-secondary">   Create Account
            </button></Link>
           
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
