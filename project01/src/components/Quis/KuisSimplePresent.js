import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisSimplePresentTense = () => {
  const questions = [
    {
      question: "He ___ to school every day. (go)",
      options: ["goes", "go", "going", "gone"],
      correctAnswer: "goes",
    },
    {
      question: "They ___ soccer every weekend. (play)",
      options: ["play", "plays", "played", "playing"],
      correctAnswer: "play",
    },
    {
      question: "She always ___ breakfast at 7 AM. (have)",
      options: ["has", "have", "having", "had"],
      correctAnswer: "has",
    },
    {
      question: "We ___ to the gym on Mondays. (go)",
      options: ["go", "goes", "gone", "going"],
      correctAnswer: "go",
    },
    {
      question: "The sun ___ in the east. (rise)",
      options: ["rises", "rise", "rising", "rose"],
      correctAnswer: "rises",
    },
    {
      question: "You ___ very well. (speak)",
      options: ["speak", "speaks", "speaking", "spoken"],
      correctAnswer: "speak",
    },
    {
      question: "He ___ his homework before dinner. (do)",
      options: ["does", "do", "doing", "done"],
      correctAnswer: "does",
    },
    {
      question: "I ___ water every morning. (drink)",
      options: ["drink", "drinks", "drinking", "drank"],
      correctAnswer: "drink",
    },
    {
      question: "They ___ the house every weekend. (clean)",
      options: ["clean", "cleans", "cleaning", "cleaned"],
      correctAnswer: "clean",
    },
    {
      question: "She ___ to music after work. (listen)",
      options: ["listens", "listen", "listening", "listened"],
      correctAnswer: "listens",
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
    window.location.href = "/bab5";
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

export default KuisSimplePresentTense;
