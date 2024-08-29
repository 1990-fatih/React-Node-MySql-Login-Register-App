import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Question() {
    const Add = () => {
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
        };
    return <div>Lädt...</div>;
  }

  return (
    <div>
      <div className="container bg-light py-5 mt-5 rounded-end ">
        <div className="card">
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
          >
            <div className="score">
              <h5> Points</h5>
            </div>
            <div className="question-remain">
              <span style={{ fontFamily: "italic" }}>Question of List</span>
            </div>
            <div className="timer">
              <h5>Counter sec ⏱</h5>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
