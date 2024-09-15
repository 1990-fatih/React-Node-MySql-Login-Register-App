import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizComponent = () => {
  const { userId, examId } = useParams(); 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

// Fragen aus der Datenbank abrufen
  useEffect(() => {
    axios.get(`http://localhost:5000/api/exam/${examId}/questions`)
      .then(response => {
        console.log("Fragen:", response.data); //Um Fragen zu überprüfen
        setQuestions(response.data);
      })
      .catch(error => console.error(error));
  }, [examId]);

  // Auswahlauswahlfunktion
  const handleChoiceSelection = (questionId, choiceText) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: choiceText // Wir speichern den Text der ausgewählten Option
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
  
    questions.forEach((question) => {
      console.log(`Question: ${question.questionText}, Correct Answer: ${question.correctAnswerId}, Selected Answer: ${selectedAnswers[question.id]}`);
  
// Wenn die ausgewählte Antwort mit der richtigen Antwort übereinstimmt
      if (selectedAnswers[question.id] === question.correctAnswerId) {
        correctCount++;
      }
    });
  
    setScore(correctCount);
    setIsQuizFinished(true);

//Speichern Sie die Ergebnisse in der Datenbank
    axios.post('http://localhost:5000/api/save-result', {
      userId,
      examId,
      score: correctCount
    }).then(() => {
      console.log("Das Ergebnis wurde erfolgreich gespeichert.");
    }).catch(error => {
      console.error("Fehler beim Speichern der Ergebnisse:", error);
    });
  };

// Ergebnis anzeigen, wenn die Prüfung beendet ist
  if (isQuizFinished) {
    return (
      <div>
        <h2>Prüfungsergebnisse</h2>
        <p>Anzahl der richtigen Antworten {score} / {questions.length}</p>
      </div>
    );
  }

// Vor- und Zurück-Tasten
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

// Aktuelle Frage und Optionen anzeigen
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion ? currentQuestion.questionText : 'Loadin...'}</h2>
      {currentQuestion && currentQuestion.choices.map((choice, index) => (
        <button
        key={choice.id}
        onClick={() => handleChoiceSelection(currentQuestion.id, choice.choiceText)} // Auswahltext wird gesendet
        style={{
          backgroundColor: selectedAnswers[currentQuestion.id] === choice.choiceText ? 'lightgreen' : ''
        }}
      >
        {String.fromCharCode(65 + index)}. {choice.choiceText}
      </button>
      ))}
      <div>
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>Zurück</button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={calculateScore}>Beenden Sie die Prüfung</button>
        ) : (
          <button onClick={goToNextQuestion}>Nachste</button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
