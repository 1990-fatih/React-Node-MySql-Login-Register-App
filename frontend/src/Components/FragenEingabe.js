import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [frage, setFrage] = useState({
    frageText: "",
    antwort1: "",
    antwort2: "",
    antwort3: "",
    antwort4: "",
    correct: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFrage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/addFrage", frage);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }

    setFrage({
      frageText: "",
      antwort1: "",
      antwort2: "",
      antwort3: "",
      antwort4: "",
      correct: "",
    });
  };

  return (
    <div>
      <div className="container bg-light py-5 mt-5 rounded-end">
        <div className="card  bg-info bg-opacity-25">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
            className="justify-content-between p-3"
          >
            <div className="image">
              <img
                src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-react-512.png"
                width="90"
                alt="logo"
              />
            </div>
            <div style={{ textAlign: "right" }} className="quiz-header">
              <h4 style={{ fontFamily: "cursive" }}>
                React & TypeScript Quiz!
              </h4>
              <span style={{ fontFamily: "italic" }}>Welcome NAME</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
            className="d-flex justify-content-around py-3"
          ></div>
          <div>
            <div className="form bg-success p-2 text-dark bg-opacity-25">
              <h1>Add New frage</h1>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Fragetext
                </label>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="frageText"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Antwort A
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort1"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Antwort B
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort2"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Antwort C
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort3"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Antwort D
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort4"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">
                  Richtige Antwort
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="correct"
                />
              </div>
              <div class="text-end p-3">
                <button
                  type="button"
                  onClick={handelClick}
                  className="btn btn-success"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
