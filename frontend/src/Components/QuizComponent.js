import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizComponent = ({ userId, examId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Soruları veritabanından çek
  useEffect(() => {
    axios.get(`/api/exam/${examId}/questions`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => console.error(error));
  }, [examId]);

  // Şık seçme fonksiyonu
  const handleChoiceSelection = (questionId, choiceId) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: choiceId
    }));
  };

  // Sonucu hesapla
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswerId) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsQuizFinished(true);

    // Sonuçları veritabanına kaydet
    axios.post('/api/save-result', {
      userId,
      examId,
      score: correctCount
    });
  };

  // Sınav bittiyse sonucu göster
  if (isQuizFinished) {
    return (
      <div>
        <h2>Sınav Sonuçları</h2>
        <p>Doğru Cevap Sayısı: {score} / {questions.length}</p>
      </div>
    );
  }

  // İleri ve geri butonları
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

  // Şu anki soruyu ve şıkları göster
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion ? currentQuestion.questionText : 'Yükleniyor...'}</h2>
      {currentQuestion && currentQuestion.choices.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => handleChoiceSelection(currentQuestion.id, choice.id)}
          style={{
            backgroundColor: selectedAnswers[currentQuestion.id] === choice.id ? 'lightgreen' : ''
          }}
        >
          {String.fromCharCode(65 + index)}. {choice.choiceText}
        </button>
      ))}
      <div>
        <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>Geri</button>
        {currentQuestionIndex === questions.length - 1 ? (
          <button onClick={calculateScore}>Sınavı Bitir</button>
        ) : (
          <button onClick={goToNextQuestion}>İleri</button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
