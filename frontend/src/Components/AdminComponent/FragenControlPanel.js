import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";

function FragenControlPanel() {
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/frage")
      .then((response) => {
        setFragen(response.data);
      })
      .catch((error) => console.error("Fehler beim Laden der Fragen:", error));
  }, []);

  const deleteFrage = async (id) => {
    try {
      await axios.delete("http://localhost:8800/deleteFrage/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [values, setValues] = useState({
    frageText: "",
    antwort1: "",
    antwort2: "",
    antwort3: "",
    antwort4: "",
    correct: "",
  });

  const navigate = useNavigate();
  const location = useLocation("/");

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/deleteFrage/" + e, values);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <Link to={"/addFrage"}>
        <button type="button" class="btn btn-secondary float-end btn-sm">
          Admin Panel
        </button>
      </Link>

      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <h1 style={{ fontFamily: "cursive" }}>Fragen List</h1>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Frage Id</th>
            <th scope="col">Frage Text</th>
            <th scope="col">Antwort A </th>
            <th scope="col">Antwort B </th>

            <th scope="col">Antwort C </th>
            <th scope="col">Antwort D </th>
            <th scope="col">Correct Antwort </th>
            <th scope="col" colSpan={"2"}>
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {fragen.map((frage, index) => {
            return (
              <tr scope="col" key={index}>
                <td scope="col">{frage.frageId}</td>
                <td>{frage.frageText}</td>
                <td>{frage.antwort1}</td>
                <td>{frage.antwort2}</td>
                <td type="password">{frage.antwort3}</td>
                <td>{frage.antwort4}</td>
                <td>{frage.correct}</td>

                <th scope="col" colSpan={"2"}>
                  <button
                    onClick={() => deleteFrage(frage.frageId)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                  <button type="button" className="btn btn-primary m-1">
                    Update
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="form bg-secondary.bg-gradient">
        <h1>Update the Book</h1>
        <input
          type="text"
          name="userFirst_name"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="text"
          name="usersLast_name"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="password"
          name="usersPassword"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="number"
          name="usersGeburtsjahr"
          className="form-control"
          onChange={handleInput}
        />

        <button onClick={handelClick}>Update</button>
      </div>
    </div>
  );
}

export default FragenControlPanel;
