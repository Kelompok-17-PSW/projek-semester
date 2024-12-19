import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentContinuousTense = () => {
  const questions = [
    {
      question: "He ___ a book now. (read)",
      options: ["is reading", "reads", "was reading", "read"],
      correctAnswer: "is reading",
    },
    {
      question: "They ___ soccer at the moment. (play)",
      options: ["are playing", "play", "were playing", "played"],
      correctAnswer: "are playing",
    },
    {
      question: "She ___ dinner right now. (cook)",
      options: ["is cooking", "cooks", "was cooking", "cooked"],
      correctAnswer: "is cooking",
    },
    {
      question: "We ___ to the park this afternoon. (go)",
      options: ["are going", "go", "were going", "went"],
      correctAnswer: "are going",
    },
    {
      question: "I ___ for my keys. (look)",
      options: ["am looking", "look", "was looking", "looked"],
      correctAnswer: "am looking",
    },
    {
      question: "The baby ___ right now. (cry)",
      options: ["is crying", "cries", "was crying", "cried"],
      correctAnswer: "is crying",
    },
    {
      question: "You ___ too loudly! (talk)",
      options: ["are talking", "talk", "were talking", "talked"],
      correctAnswer: "are talking",
    },
    {
      question: "He ___ his car. (wash)",
      options: ["is washing", "washes", "was washing", "washed"],
      correctAnswer: "is washing",
    },
    {
      question: "They ___ TV at the moment. (watch)",
      options: ["are watching", "watch", "were watching", "watched"],
      correctAnswer: "are watching",
    },
    {
      question: "She ___ her room. (clean)",
      options: ["is cleaning", "cleans", "was cleaning", "cleaned"],
      correctAnswer: "is cleaning",
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
    window.location.href = "/bab6";
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 3</li>
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

export default KuisPresentContinuousTense;
