import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisPastContinuousTense = () => {
  const questions = [
    {
      question: "She ___ (study) when I called her.",
      options: ["were studying", "is studying", "studied", "was studying"],
      correctAnswer: "was studying",
    },
    {
      question: "They ___ (watch) a movie when the lights went out.",
      options: ["watch", "were watching", "were watched", "watched"],
      correctAnswer: "were watching",
    },
    {
      question: "At this time last week, we ___ (eat) dinner.",
      options: ["eat", "are eating", "ate", "were eating"],
      correctAnswer: "were eating",
    },
    {
      question: "I ___ (do) my homework when you arrived.",
      options: ["is doing", "was doing", "were doing", "did"],
      correctAnswer: "was doing",
    },
    {
      question: "They ___ (not work) when the boss came in.",
      options: ["weren't work", "weren't working", "didn't work", "not working"],
      correctAnswer: "weren't working",
    },
    {
      question: "She ___ (talk) to her friend on the phone at 10 p.m.",
      options: ["is talking", "talked", "was talking", "talks"],
      correctAnswer: "was talking",
    },
    {
      question: "I ___ (read) a book when the phone rang.",
      options: ["is reading", "am reading", " was reading", "reads"],
      correctAnswer: "was reading",
    },
    {
      question: "We ___ (play) football when it started to rain.",
      options: ["were playing", "are playing", "played", "playing"],
      correctAnswer: "were playing",
    },
    {
      question: "At 8 o'clock, he ___ (sleep).",
      options: ["is sleeping", "was sleeping", "sleeps", "sleeped"],
      correctAnswer: "was sleeping",
    },
    {
      question: "They ___ (not enjoy) the concert last night.",
      options: ["didn't enjoying", "aren't enjoying", "weren't enjoy", "don't enjoy"],
      correctAnswer: "weren't enjoying",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
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
          <li>Pelajaran Ke : 2</li>
          <li>Jumlah Soal : {questions.length}</li>
          <li>Jawaban Benar : {correctAnswers}</li>
          <li>Jawaban Salah : {wrongAnswers}</li>
          <li>Nilai : {Math.round((correctAnswers / questions.length) * 100)}</li>
          <li>Keterangan : {correctAnswers / questions.length >= 0.6 ? "Lulus" : "Tidak Lulus"}</li>
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

  const currentQuestion = questions[currentQuestionIndex];

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

export default KuisPastContinuousTense;
