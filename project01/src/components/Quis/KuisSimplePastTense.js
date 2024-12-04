import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisSimplePastTense = () => {
  const questions = [
    {
      question: "She ___ a letter yesterday. (write)",
      options: ["wrote", "write", "written", "writes"],
      correctAnswer: "wrote",
    },
    {
      question: "They ___ to the cinema last night. (go)",
      options: ["went", "go", "going", "gone"],
      correctAnswer: "went",
    },
    {
      question: "I ___ the book on the table. (put)",
      options: ["put", "puts", "putted", "putting"],
      correctAnswer: "put",
    },
    {
      question: "He ___ his homework last night. (do)",
      options: ["did", "done", "does", "doing"],
      correctAnswer: "did",
    },
    {
      question: "We ___ a great time at the party. (have)",
      options: ["had", "have", "having", "haved"],
      correctAnswer: "had",
    },
    {
      question: "You ___ the movie already. (see)",
      options: ["saw", "seen", "seeing", "see"],
      correctAnswer: "saw",
    },
    {
      question: "She ___ a new car last week. (buy)",
      options: ["bought", "buys", "buyed", "buying"],
      correctAnswer: "bought",
    },
    {
      question: "They ___ the marathon. (run)",
      options: ["ran", "run", "runned", "running"],
      correctAnswer: "ran",
    },
    {
      question: "I ___ breakfast early this morning. (eat)",
      options: ["ate", "eats", "eaten", "eating"],
      correctAnswer: "ate",
    },
    {
      question: "He ___ the ball to me. (throw)",
      options: ["threw", "throwed", "throw", "throwing"],
      correctAnswer: "threw",
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
          <li>Pelajaran Ke : 1</li>
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

export default KuisSimplePastTense;
