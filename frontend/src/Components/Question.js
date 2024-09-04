import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Question() {
  
  const [aktuelleFrage, setAktuelleFrage] = useState(null);
  const [aktuelleFrageIndex, setAktuelleFrageIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [ergebnisAnzeigen, setErgebnisAnzeigen] = useState(false);
  const [fragen, setFragen] = useState([]);

  useEffect(() => {
    // Tüm soruları API'den çekiyoruz
    axios
      .get("http://localhost:8800/frage")
      .then((response) => {
        setFragen(response.data);
        setAktuelleFrage(response.data[0]); // İlk soruyu ayarla
      })
      .catch((error) => console.error("Fehler beim Laden der Fragen:", error));
  }, []);

  const handleAntwortClick = (antwort) => {
    if (antwort === aktuelleFrage.correct) {
      setPunkte(punkte + 1);
    }
  };

  const handleNaechsteFrage = () => {
    const naechsteFrageIndex = aktuelleFrageIndex + 1;
    if (naechsteFrageIndex < fragen.length) {
      setAktuelleFrageIndex(naechsteFrageIndex);
      setAktuelleFrage(fragen[naechsteFrageIndex]);
    } else {
      setErgebnisAnzeigen(true);
    }
  };

  const handleVorherige = ()=>{
    if(aktuelleFrageIndex>0){
      const naechsteFrageIndex = aktuelleFrageIndex - 1;
      if (naechsteFrageIndex < fragen.length) {
        setAktuelleFrageIndex(naechsteFrageIndex);
        setAktuelleFrage(fragen[naechsteFrageIndex]);
      } else {
        setErgebnisAnzeigen(true);
      }
    }
    
  }

  if (ergebnisAnzeigen) {
    return (
      <div>
        <h1>Quiz Beendet!</h1>
        <p>Ergebnis: {punkte} richtige Antworten.</p>
      </div>
    );
  }

  if (!aktuelleFrage) {
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
            <div className="image text-start">
              <img
                src="https://bbz-ev.de/wp-content/uploads/2021/07/BBZ-Logo.png"
                width="25%"
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
              <span style={{ fontFamily: "italic" }}>Question of List {aktuelleFrage.frageId}/{fragen.length}</span>
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
          <div style={{ marginTop: "2%" }} className="question">
            <div style={{ textAlign: "left" }} className="card">
              <h3>{aktuelleFrage.frageText}</h3>
            </div>
          </div>
          <div className="list-group">
            <Link>
              <li
                onClick={() => handleAntwortClick(aktuelleFrage.antwort1)}
                className="text-start list-group-item list-group-item-action m-1"
              >
                {aktuelleFrage.antwort1}
              </li>
            </Link>

            <a
              className="text-start list-group-item list-group-item-action m-1"
              onClick={() => handleAntwortClick(aktuelleFrage.antwort2)}
            >
              {aktuelleFrage.antwort2}
            </a>
            <a
              className="text-start list-group-item list-group-item-action m-1"
              onClick={() => handleAntwortClick(aktuelleFrage.antwort3)}
            >
              {aktuelleFrage.antwort3}
            </a>
            <a
              className="text-start list-group-item list-group-item-action m-1"
              onClick={() => handleAntwortClick(aktuelleFrage.antwort4)}
            >
              {aktuelleFrage.antwort4}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
            }}
            className="d-flex justify-content-between"
          >
            <button type="button" class="btn btn-secondary btn-lg" onClick={handleVorherige}>
              Vorherige
            </button>
            <button type="button" class="btn btn-secondary btn-lg">
              Refrech
            </button>
            <button
              onClick={handleNaechsteFrage}
              type="button"
              class="btn btn-secondary btn-lg"
            >
              Nächste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
