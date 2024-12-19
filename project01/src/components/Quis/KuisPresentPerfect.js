import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentPerfectTense = () => {
  const questions = [
    {
      question: "She ___ the cake. (make)",
      options: ["has made", "made", "makes", "is making"],
      correctAnswer: "has made",
    },
    {
      question: "I ___ my homework already. (finish)",
      options: ["have finished", "finished", "am finishing", "finishes"],
      correctAnswer: "have finished",
    },
    {
      question: "They ___ to Japan twice. (go)",
      options: ["have gone", "went", "go", "have been"],
      correctAnswer: "have gone",
    },
    {
      question: "He ___ his wallet. (lose)",
      options: ["has lost", "lost", "is losing", "loses"],
      correctAnswer: "has lost",
    },
    {
      question: "We ___ this movie before. (see)",
      options: ["have seen", "saw", "see", "has seen"],
      correctAnswer: "have seen",
    },
    {
      question: "You ___ to that restaurant. (be)",
      options: ["have been", "are", "were", "was"],
      correctAnswer: "have been",
    },
    {
      question: "The baby ___ all the milk. (drink)",
      options: ["has drunk", "drank", "drinks", "is drinking"],
      correctAnswer: "has drunk",
    },
    {
      question: "We ___ in this house for 5 years. (live)",
      options: ["have lived", "lived", "live", "are living"],
      correctAnswer: "have lived",
    },
    {
      question: "She ___ her keys. (find)",
      options: ["has found", "finds", "found", "is finding"],
      correctAnswer: "has found",
    },
    {
      question: "They ___ the project on time. (complete)",
      options: ["have completed", "completed", "complete", "are completing"],
      correctAnswer: "have completed",
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
    window.location.href = "/bab7";
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 4</li>
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

export default KuisPresentPerfectTense;
