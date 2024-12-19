import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisPastPerfectContinuousTense = () => {
  const originalQuestions = [
    {
      question: "She ___ (study) for two hours when I called her.",
      options: ["had been studying", "was studying", "has been studying", "studied"],
      correctAnswer: "had been studying",
    },
    {
      question: "They ___ (wait) for an hour when the train finally arrived.",
      options: ["had been waiting", "waited", "have been waiting", "were waiting"],
      correctAnswer: "had been waiting",
    },
    {
      question: "I ___ (work) on the project all day before I took a break.",
      options: ["had been working", "worked", "was working", "have been working"],
      correctAnswer: "had been working",
    },
    {
      question: "We ___ (live) in that house for ten years before we moved.",
      options: ["had been living", "lived", "have been living", "were living"],
      correctAnswer: "had been living",
    },
    {
      question: "By the time the meeting started, she ___ (talk) for an hour.",
      options: ["had been talking", "talked", "has been talking", "was talking"],
      correctAnswer: "had been talking",
    },
    {
      question: "I ___ (try) to call you all morning, but your phone was off.",
      options: ["had been trying", "tried", "have been trying", "was trying"],
      correctAnswer: "had been trying",
    },
    {
      question: "He ___ (run) for an hour when he finally reached the finish line.",
      options: ["had been running", "ran", "has been running", "was running"],
      correctAnswer: "had been running",
    },
    {
      question: "They ___ (plan) their trip for months before they actually booked the tickets.",
      options: ["had been planning", "planned", "have been planning", "were planning"],
      correctAnswer: "had been planning",
    },
    {
      question: "She ___ (read) for over an hour before she decided to take a break.",
      options: ["had been reading", "read", "has been reading", "was reading"],
      correctAnswer: "had been reading",
    },
    {
      question: "By the time the storm hit, we ___ (wait) for the bus for half an hour.",
      options: ["had been waiting", "waited", "were waiting", "have been waiting"],
      correctAnswer: "had been waiting",
    },
  ];

  // Fungsi untuk mengacak array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Salin dan acak opsi setiap pertanyaan
  const shuffledQuestions = originalQuestions.map((question) => ({
    ...question,
    options: shuffle([...question.options]),
  }));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizFinished(false);
  };

  const goToMenu = () => {
    window.location.href = '/bab4';  
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 4</li>
          <li>Jumlah Soal : {shuffledQuestions.length}</li>
          <li>Jawaban Benar : {correctAnswers}</li>
          <li>Jawaban Salah : {wrongAnswers}</li>
          <li>Nilai : {Math.round((correctAnswers / shuffledQuestions.length) * 100)}</li>
          <li>Keterangan : {correctAnswers / shuffledQuestions.length >= 0.6 ? "Lulus" : "Tidak Lulus"}</li>
        </ul>
        <div className="button-group">
          <button className="restart-button" onClick={restartQuiz}>
            ULANGI
          </button>
          <button className="menu-button" onClick={goToMenu}>
            MENU
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <div className="question-number">No. {currentQuestionIndex + 1}</div>
        <div className="score-container">
          <span className="correct-score">✔ {correctAnswers}</span>
          <span className="wrong-score">✖ {wrongAnswers}</span>
        </div>
      </header>
      <div className="question-box">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="answer-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KuisPastPerfectContinuousTense;
