import React from 'react'

function Home() {
  return (
    
      <div className="container mt-5">
    <div className="card">
        <div className="d-flex justify-content-between p-3">
            <div className="image">
                <img src="https://img.icons8.com/color/96/000000/angularjs.png" width="90" alt="logo"/>
            </div>
            <div className="quiz-header">
                <span >Welcome </span>
            </div>
        </div>

      
            <div className="d-flex justify-content-around py-3">
                <div className="score">
                    <h5>{{}} Points</h5>
                </div>
                <div className="question-remain">
                    <span >Question</span>
                </div>
                <div className="timer">
                    <h5>{{}} sec ⏱</h5>
                </div>
            </div>
            <div className="progress mb-3">
                {/* <div className="progress-bar progress-bar-striped bg-success" role="progressbar". " aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
            </div>
            <div className="question">
                <div className="card">
                    <h3>{}</h3>
                </div>
            </div>
            <div className="options">
                <ol>
                    <li>
                        <div >
                            
                        </div>
                    </li>

                </ol>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn" ><i className="fa text-primary fa-chevron-left fa-3x" aria-hidden="true"></i></button>
                <button className="btn"><i className="fa fa-refresh text-primary fa-3x" aria-hidden="true"></i></button>
                <button className="btn"><i className="fa text-primary fa-chevron-right fa-3x" aria-hidden="true"></i></button>
            </div>

       
            <div className="row d-flex justify-content-between">
                <img  className="img-fluid col-sm-12 mx-auto" src="https://icon-library.com/images/celebration-icon-png/celebration-icon-png-7.jpg" alt=""/>
                {/* <div className="result text-center col-md-6 col-sm-12">
                    <p>Congratulations!! <br>You have completed the quiz. <br>Below is your result:</p>
                    <p>Total Question Attempted : {{questionList.length}} </p>
                    <p>Total Correct Answered : {{correctAnswer}} </p>
                    <p>Total Wrong Answered : {{inCorrectAnswer}} </p>
                    <p>Your Score : {{points}} Points </p>
                </div>
            </div> */}
     
            </div>
</div>
</div>
   )}

export default Home