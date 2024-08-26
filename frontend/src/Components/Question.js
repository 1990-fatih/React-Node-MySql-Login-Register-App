import React from "react";

function Question() {
  return (
    <div>
      <div classNameName="container mt-5">
        <div classNameName="card">
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop:"2%"
            }}  classNameName="justify-content-between p-3">
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
              marginTop:"2%"
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
          <div style={{marginTop:"2%"}} classNameName="question">
            <div style={{ textAlign: "left" }} classNameName="card">
              <h3>Question of list</h3>
            </div>
          </div>
          <div classNameName="options">
            <ol style={{ textAlign: "left" }} classNameName="card">
              <li>
                <div classNameName="card">options1</div>
              </li>
              <li>
                <div classNameName="card">options1</div>
              </li>
              <li>
                <div classNameName="card">options1</div>
              </li>
              <li>
                <div classNameName="card">options1</div>
              </li>
            </ol>
          </div>
          {/* <div classNameName="d-flex justify-content-between">
                    <button [disabled]="currentQuestion===0" classNameName="btn" (click)="previousQuestion()"><i classNameName="fa text-primary fa-chevron-left fa-3x" aria-hidden="true"></i></button>
                    <button classNameName="btn" (click)="resetQuiz()"><i classNameName="fa fa-refresh text-primary fa-3x" aria-hidden="true"></i></button>
                    <button classNameName="btn" (click)="nextQuestion()"><i classNameName="fa text-primary fa-chevron-right fa-3x" aria-hidden="true"></i></button>
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default Question;
