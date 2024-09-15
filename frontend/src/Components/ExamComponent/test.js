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
  <div style={{ marginTop: "2%" }} className="question">
    <div style={{ textAlign: "left" }} className="card">
      <h3>{currentQuestion ? currentQuestion.questionText : 'Loadin...'}</h3>
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
    <button type="button" class="btn btn-secondary btn-lg">
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