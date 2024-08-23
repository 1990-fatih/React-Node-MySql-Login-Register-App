import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function Signnup() {
  return (
    <div>
      
      <div style={{padding:"20%"}} className="row ">
        <div className="col"></div>
        <div style={{padding:"3%"}} className="col align-self-center border border-secondary" >
          <form><h2>Sign-Up</h2>
            <div style={{textAlign:"left"}}  className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
               Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
               
              </div>
            </div>
            <div style={{textAlign:"left"}}  className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
               Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
               
              </div>
            </div>
            <div style={{textAlign:"left"}} className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
         
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p>New Account</p>
            <Link to="/"><button type="submit" className="btn btn-secondary"> Login
            </button></Link>
           
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Signnup