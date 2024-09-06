import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ValidationComp/LoginValidation";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState({
    email: "",
    usersPassword: "",
  });
  const [adminValues, setAdminValues] = useState({
    adminEmail: "",
    adminPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

   const handleAdminInput = (e) => {
    setAdminValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  }; 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validation(values));

    if (true) {
      axios
        .post("http://localhost:8800/login", values)
        .then((res) => {
          if (res.data === "Success") {
            
            navigate("/question");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };



  const handleAdminSubmit = (e) => {
    e.preventDefault();

    setErrors(Validation(adminValues));

    if (true) {
      axios
        .post("http://localhost:8800/adminLogin", adminValues)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/adminPanel");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <button
        onClick={handleShow}
        type="button"
        class="btn btn-secondary float-end btn-sm"
      >
        Admin Panel
      </button>

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
      <h1 style={{ fontFamily: "cursive" }}>All the best!!</h1>
      <form>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your E-mail:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleInput}
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your Password:</label>
          <input
            type="password"
            name="usersPassword"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4"
        >
          <button
            style={{ float: "left" }}
            onClick={handleSubmit}
            className="btn btn-primary btn-m"
          >
            Start the Quiz!!
          </button>
        </div>

        <div
          style={{ fontFamily: "cursive", textAlign: "end" }}
          className="col-md-4"
        >
          <Link to={"/userRegister"}>
            <button className="btn btn-secondary btn-m ">Create Account</button>
          </Link>
        </div>
      </form>
      <div className="pt-4" style={{ textAlign: "left" }}></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ fontFamily: "cursive", textAlign: "center" }}>
            <div style={{ fontFamily: "cursive", textAlign: "center" }}>
              <label for="">Enter your E-mail:</label>
              <input
                type="email"
                name="adminEmail"
                className="form-control"
                onChange={handleAdminInput}
              />
            </div>
            <div style={{ fontFamily: "cursive", textAlign: "center" }}>
              <label for="">Enter your Password:</label>
              <input
                type="password"
                name="adminPassword"
                className="form-control"
                onChange={handleAdminInput}
              />
            </div>
            <div
              style={{ fontFamily: "cursive", textAlign: "left" }}
              class="col-md-4"
            ></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/adminPanel"}>
            <button>GECICI bUTTON</button>
          </Link>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdminSubmit}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
