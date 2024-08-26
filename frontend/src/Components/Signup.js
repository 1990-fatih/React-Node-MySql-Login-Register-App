import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignValidation.";
import axios from "axios";

function Signnup() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8800/singin", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div style={{ padding: "10%" }} className="row ">
        <div className="col"></div>
        <div
          style={{ padding: "3%" }}
          className="col align-self-center border border-secondary"
        >
          <form onSubmit={handleSubmit}>
            <h2>Sign-Up</h2>
            <div style={{ textAlign: "left" }} className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleInput}
              />{" "}
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <div style={{ textAlign: "left" }} className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleInput}
              />{" "}
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div style={{ textAlign: "left" }} className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <p>New Account</p>
            <Link to="/">
              <button className="btn btn-secondary"> Login</button>
            </Link>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Signnup;
