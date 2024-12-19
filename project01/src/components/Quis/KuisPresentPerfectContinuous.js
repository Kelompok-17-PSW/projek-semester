import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentPerfectContinuousTense = () => {
  const questions = [
    {
      question: "She ___ at the company for 5 years. (work)",
      options: ["has been working", "has worked", "is working", "works"],
      correctAnswer: "has been working",
    },
    {
      question: "They ___ in Paris since 2010. (live)",
      options: ["have been living", "are living", "lived", "have lived"],
      correctAnswer: "have been living",
    },
    {
      question: "I ___ all day and I'm tired now. (study)",
      options: ["have been studying", "am studying", "studies", "studied"],
      correctAnswer: "have been studying",
    },
    {
      question: "He ___ the book for 2 hours. (read)",
      options: ["has been reading", "has read", "is reading", "reads"],
      correctAnswer: "has been reading",
    },
    {
      question: "We ___ for you since 9 AM. (wait)",
      options: ["have been waiting", "are waiting", "waited", "wait"],
      correctAnswer: "have been waiting",
    },
    {
      question: "She ___ for 3 hours. (run)",
      options: ["has been running", "has run", "is running", "runs"],
      correctAnswer: "has been running",
    },
    {
      question: "They ___ football all morning. (play)",
      options: ["have been playing", "have played", "are playing", "plays"],
      correctAnswer: "have been playing",
    },
    {
      question: "You ___ for 10 minutes. (talk)",
      options: ["have been talking", "are talking", "talks", "talked"],
      correctAnswer: "have been talking",
    },
    {
      question: "The team ___ well in the tournament. (play)",
      options: ["has been playing", "have played", "plays", "has played"],
      correctAnswer: "has been playing",
    },
    {
      question: "She ___ at the museum since 2 PM. (work)",
      options: ["has been working", "is working", "works", "has worked"],
      correctAnswer: "has been working",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const shuffleOptions = (options) => {
    return [...options].sort(() => Math.random() - 0.5);
  };

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
    window.location.href = "/bab9";
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 5</li>
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
  const shuffledOptions = shuffleOptions(currentQuestion.options);

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
        {shuffledOptions.map((option, index) => (
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

export default KuisPresentPerfectContinuousTense;
