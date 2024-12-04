import React, { useState } from "react";
import "./KuisSimpleFuture.css";

function KuisSimplePresent() {
  const questions = [
    {
      question: " She … her dog everyday(feed)",
      options: ["To feed", " Feed", "Feeds", " Feeding"],
      correctAnswer: "Feeds",
    },
    {
      question: "Tom and I … …(surf) together.",
      options: ["Do surfinga", "Don’t surfing", " Do surfs", "Don’t surf"],
      correctAnswer: "Don’t surf",
    },
    {
      question: "I … breakfast every day at 7 AM(eat)",
      options: [" Eat", "To eat", "Ate", " Eaten"],
      correctAnswer: " Eat",
    },
    {
      question: "We sometimes … by chance in the convenience store.(meet)",
      options: ["Meets", "Meet", "Meeting", " Will meets"],
      correctAnswer: "Meets",
    },
    {
      question: "Who … towards the post office?(walk)",
      options: ["Walks", "rises", " Is walk", " Walked"],
      correctAnswer: " Is walking",
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
