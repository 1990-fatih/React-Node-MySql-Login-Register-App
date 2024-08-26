import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Validation from './LoginValidation';
import axios from "axios"



function Login() {
  const navigate = useNavigate();

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] =useState({});
    
    const handleInput =(e)=>{
        setValues(prev => ({...prev,[e.target.name]:[e.target.value]}))
    } 
    const handleSubmit =(e) =>{
        e.preventDefault();

        setErrors(Validation(values))

        if(true){
          axios.post('http://localhost:8800/get',values).then(res => 
            {
            if(res.data==="Success"){
              navigate("/home")
            }else{
              alert("No record existed")
            }
          })
          .catch(err => console.log(err))
        }
      }

  return (
    <div>
        
      <div style={{padding:"10%"}} className="row ">
     
        <div className="col"></div>
        <div style={{padding:"3%"}} className="col align-self-center border border-secondary" >
          <form onSubmit={handleSubmit}> <h2>Sign-In</h2>
            <div style={{textAlign:"left"}}  className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={handleInput}

              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div style={{textAlign:"left"}}   className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleInput}
              />
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
         
            <button type="submit" className="btn btn-primary">
              Log-In
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
