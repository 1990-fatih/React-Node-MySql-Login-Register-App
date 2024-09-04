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
      <div className="container bg-light  mt-5 rounded-end">
        
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
            className="justify-content-between p-3"
          >
           
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
            <div className="form p-2 text-dark rounded-5">
              <h1>Add New frage</h1>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Fragetext</label>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="frageText"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Antwort A</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort1"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Antwort B</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort2"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Antwort C</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort3"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Antwort D</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="antwort4"
                />
              </div>
              <div className="mb-3 text-start fs-5 p-2">
                <label className="form-label">Richtige Antwort</label>
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
                <div class="text-end p-3">
                  <Link to={"/userContol"}>
                    <button type="button" className="btn btn-success">
                      User Control
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default Question;
