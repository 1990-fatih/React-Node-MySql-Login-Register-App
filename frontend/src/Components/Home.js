import React from 'react'

function Home() {
  return (
    <div className='container bg-light py-5'>
      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <p className="col-md-8 fs-4">This quiz will contains total 9 questions. Each Question holds 10 Points</p>
      <h4 style={{textAlign:"left"}}>Rules:</h4>
    <ol style={{textAlign:"left"}}>
        <li>Correct Question gives you 10 points</li>
        <li>Incorrect question gives to -10 points</li>
        <li>You will have 60 sec to answer each question</li>
        <li>Refereshing the page will reset the Quiz</li>
    </ol>
    <h1 style={{fontFamily:"cursive", textAlign:"left"}}>All the best!!</h1>
    <div class="name col-md-4 my-3">
        <label for="">Enter your name:</label>
        <input type="text" class="form-control"/>
    </div>
    <button class="btn btn-primary btn-lg"> Start the Quiz!!</button>

    </div>
    )}

export default Home