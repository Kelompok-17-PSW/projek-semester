import React, { useState } from "react";
import "./KuisSimpleFuture.css";

function KuisSimplePresent() {
  const questions = [
    {
      question: "He ... to school every day. (go)",
      options: ["go", "goes", "going", "gone"],
      correctAnswer: "goes",
    },
    {
      question: "They ... soccer on weekends. (play)",
      options: ["play", "plays", "playing", "played"],
      correctAnswer: "play",
    },
    {
      question: "She ... coffee every morning. (drink)",
      options: ["drink", "drinks", "drinking", "drank"],
      correctAnswer: "drinks",
    },
    {
      question: "I ... my homework after school. (do)",
      options: ["do", "does", "doing", "done"],
      correctAnswer: "do",
    },
    {
      question: "The sun ... in the east. (rise)",
      options: ["rise", "rises", "rising", "rose"],
      correctAnswer: "rises",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
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
    setQuizFinished(false);
  };

  const goToMenu = () => {
    window.location.href = '/menu';  
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul>
          <li>Total Questions: {questions.length}</li>
          <li>Correct Answers: {correctAnswers}</li>
          <li>Score: {Math.round((correctAnswers / questions.length) * 100)}%</li>
          <li>Status: {correctAnswers / questions.length >= 0.6 ? "Passed" : "Failed"}</li>
        </ul>
        <button onClick={restartQuiz}>Retry</button>
        <button onClick={goToMenu}>Menu</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <div className="answer-options">
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div>
        <span>Correct: {correctAnswers}</span>
      </div>
    </div>
  );
}

export default KuisSimplePresent;
