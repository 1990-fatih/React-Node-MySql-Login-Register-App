import React , { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Validation from './ValidationComp/LoginValidation';
import axios from "axios"

function Home() {
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
          axios.post('http://localhost:8800/login',values).then(res => 
            {
            if(res.data==="Success"){
              navigate("/question")
            }else{
              alert("No record existed")
            }
          })
          .catch(err => console.log(err))
        }
      }
  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <p style={{ textAlign: "left" }} className="col-md-8 fs-4">
        This quiz will contains total 9 questions. Each Question holds 10 Points
      </p>
      <h4 style={{ textAlign: "left" }}>Rules:</h4>
      <ol style={{ textAlign: "left" }}>
        <li>Correct Question gives you 10 points</li>
        <li>Incorrect question gives to -10 points</li>
        <li>You will have 60 sec to answer each question</li>
        <li>Refereshing the page will reset the Quiz</li>
      </ol>
      <h1 style={{ fontFamily: "cursive" }}>
        All the best!!
      </h1>
      <form onSubmit={handleSubmit}>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Enter your E-mail:</label>
        <input type="email"
                name="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={handleInput}/>
      </div>
      <div style={{ fontFamily: "cursive", textAlign: "left" }} class="name col-md-4 my-3">
        <label for="">Enter your Password:</label>
        <input type="password"
                name="password"
                className="form-control"
                onChange={handleInput} />
      </div>
      <button style={{float:"left"}} onClick={handleSubmit} class="btn btn-primary btn-lg"> Start the Quiz!!</button>
      
      </form>
      <div className="pt-4" style={{textAlign: "left"}}>
     
      
      </div>
      
      <Link to="/addFrage" >
        <button class="btn btn-primary btn-lg">zu Admin</button>
      </Link>
    </div>
  );
}

export default Home;
