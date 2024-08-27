import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Question() {

  const [fragen, setFragen] = useState(null);

  useEffect(() => {
    const fectAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/frage");
        setFragen(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectAllBooks();
  }, []);

  return (
    <div>
      <div className="container bg-light py-5 mt-5 rounded-end ">
        <div classNameName="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
            classNameName="justify-content-between p-3"
          >
            <div classNameName="image">
              <img
                src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-react-512.png"
                width="90"
                alt="logo"
              />
            </div>
            <div style={{ textAlign: "right" }} classNameName="quiz-header">
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
            classNameName="d-flex justify-content-around py-3"
          >
            <div classNameName="score">
              <h5> Points</h5>
            </div>
            <div classNameName="question-remain">
              <span style={{ fontFamily: "italic" }}>Question of List</span>
            </div>
            <div classNameName="timer">
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
          <div style={{ marginTop: "2%" }} className="question">
            <div style={{ textAlign: "left" }} className="card">
              <h3>{{fragen}}</h3>
            </div>
          </div>
          <div className="list-group">
            <Link>
            <li
              className="text-start list-group-item list-group-item-action m-1"
            >
              A second link item
            </li>
            </Link>
            
            <a
              href="#"
              className="text-start list-group-item list-group-item-action m-1"
            >
              A second link item
            </a>
            <a
              href="#"
              className="text-start list-group-item list-group-item-action m-1"
            >
              A second link item
            </a>
            <a
              href="#"
              className="text-start list-group-item list-group-item-action m-1"
            >
              A second link item
            </a>
          </div>
          <div  style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }} classNameName="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary btn-lg">Vorherige</button>
          <button type="button" class="btn btn-secondary btn-lg">Refrech</button>
          <button type="button" class="btn btn-secondary btn-lg">Nächste</button>
 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
