import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FragenEingabe() {
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

    return (
      <div>
        <div className="form">
          <h1>Add New frage</h1>
          <input
            type="text"
            placeholder="frageText"
            onChange={handleChange}
            name="frageText"
          />
          <input
            type="text"
            placeholder="antwort1"
            onChange={handleChange}
            name="antwort1"
          />
          <input
            type="text"
            placeholder="antwort2"
            onChange={handleChange}
            name="antwort2"
          />
          <input
            type="text"
            placeholder="antwort3"
            onChange={handleChange}
            name="antwort3"
          />
          <input
            type="text"
            placeholder="antwort4"
            onChange={handleChange}
            name="antwort4"
          />

          <input
            type="text"
            placeholder="correct"
            onChange={handleChange}
            name="correct"
          />

          <button onClick={handelClick}>Add</button>
        </div>
        
      </div>
    );
  };
}

export default FragenEingabe;
