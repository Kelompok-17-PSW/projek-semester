import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPastPerfectContinuousTense = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    // Existing questions
    {
      question: "She ___ (study) for two hours when I called her",
      options: [
        { label: "A. had been studying", value: "A", isCorrect: true },
        { label: "B. was studying", value: "B" },
        { label: "C. has been studying", value: "C" },
        { label: "D. studied", value: "D" },
      ],
    },
    {
      question: "They ___ (wait) for an hour when the train finally arrived.",
      options: [
        { label: "A. waited", value: "A" },
        { label: "B. had been waiting", value: "B", isCorrect: true },
        { label: "C. have been waiting", value: "C" },
        { label: "D. were waiting", value: "D" },
      ],
    },
    {
      question: "We ___ (live) in that house for ten years before we moved.",
      options: [
        { label: "A. lived", value: "A" },
        { label: "B. had been living", value: "B", isCorrect: true },
        { label: "C. were living", value: "C" },
        { label: "D. have been living", value: "D" },
      ],
    },
    // Additional 15 questions
    {
      question: "He ___ (exercise) for an hour before breakfast.",
      options: [
        { label: "A. exercised", value: "A" },
        { label: "B. was exercising", value: "B" },
        { label: "C. had been exercising", value: "C", isCorrect: true },
        { label: "D. has been exercising", value: "D" },
      ],
    },
    {
      question: "They ___ (argue) for hours before coming to an agreement.",
      options: [
        { label: "A. were arguing", value: "A" },
        { label: "B. argued", value: "B" },
        { label: "C. had been arguing", value: "C", isCorrect: true },
        { label: "D. have been arguing", value: "D" },
      ],
    },
    {
      question: "By the time she arrived, I ___ (wait) for thirty minutes.",
      options: [
        { label: "A. was waiting", value: "A" },
        { label: "B. waited", value: "B" },
        { label: "C. had been waiting", value: "C", isCorrect: true },
        { label: "D. have been waiting", value: "D" },
      ],
    },
    {
      question: "The students ___ (prepare) for the exam for weeks.",
      options: [
        { label: "A. prepared", value: "A" },
        { label: "B. were preparing", value: "B" },
        { label: "C. had been preparing", value: "C", isCorrect: true },
        { label: "D. have been preparing", value: "D" },
      ],
    },
    {
      question: "She ___ (read) for three hours before she fell asleep.",
      options: [
        { label: "A. read", value: "A" },
        { label: "B. was reading", value: "B" },
        { label: "C. had been reading", value: "C", isCorrect: true },
        { label: "D. has been reading", value: "D" },
      ],
    },
    {
      question: "We ___ (plan) the trip for months before it was canceled.",
      options: [
        { label: "A. were planning", value: "A" },
        { label: "B. planned", value: "B" },
        { label: "C. had been planning", value: "C", isCorrect: true },
        { label: "D. have been planning", value: "D" },
      ],
    },
    {
      question: "He ___ (work) at the company for years before quitting.",
      options: [
        { label: "A. worked", value: "A" },
        { label: "B. was working", value: "B" },
        { label: "C. had been working", value: "C", isCorrect: true },
        { label: "D. has been working", value: "D" },
      ],
    },
    {
      question: "The children ___ (play) in the yard before it started raining.",
      options: [
        { label: "A. played", value: "A" },
        { label: "B. were playing", value: "B" },
        { label: "C. had been playing", value: "C", isCorrect: true },
        { label: "D. have been playing", value: "D" },
      ],
    },
    {
      question: "By the time the doctor arrived, she ___ (suffer) for hours.",
      options: [
        { label: "A. suffered", value: "A" },
        { label: "B. was suffering", value: "B" },
        { label: "C. had been suffering", value: "C", isCorrect: true },
        { label: "D. has been suffering", value: "D" },
      ],
    },
    {
      question: "We ___ (travel) all night before reaching the hotel.",
      options: [
        { label: "A. traveled", value: "A" },
        { label: "B. were traveling", value: "B" },
        { label: "C. had been traveling", value: "C", isCorrect: true },
        { label: "D. have been traveling", value: "D" },
      ],
    },
    // Continue adding additional questions as necessary
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Latihan Soal Past Perfect Continuous Tense</h1>
          <h2>Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Latihan Soal Past Perfect Continuous Tense</h1>
        <div className="latihan-soal1-question">
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
          </button>
          <button
            className="nav-button next"
            onClick={
              currentQuestionIndex === questions.length - 1
                ? handleFinishQuiz
                : goToNextQuestion
            }
          >
            {currentQuestionIndex === questions.length - 1
              ? "Selesai"
              : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KuisPastPerfectContinuousTense;
