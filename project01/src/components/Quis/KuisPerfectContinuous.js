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
      {
        question: "She ___ (study) for two hours when I called her.",
        options: [
          { label: "A. was studying", value: "A"},
          { label: "B. has been studying", value: "B" },
          { label: "C. had been studying", value: "C", isCorrect: true  },
          { label: "D. studied", value: "D" },
        ],
      },
      {
        question: "They ___ (wait) for an hour when the train finally arrived",
        options: [
          { label: "A. had been waiting", value: "A", isCorrect: true },
          { label: "B. waited", value: "B" },
          { label: "C. have been waiting", value: "C" },
          { label: "D. were waiting", value: "D" },
        ],
      },
      {
        question: "I ___ (work) on the project all day before I took a break",
        options: [
          { label: "A. worked", value: "A"},
          { label: "B. had been working", value: "B", isCorrect: true  },
          { label: "C. was working", value: "C" },
          { label: "D. have been working", value: "D" },
        ],
      },
      {
        question: "By the time the meeting started, she ___ (talk) for an hour.",
        options: [
          { label: "A. talked", value: "A"},
          { label: "B. was talking", value: "B" },
          { label: "C. has been talking", value: "C" },
          { label: "D. had been talking", value: "D", isCorrect: true},
        ],
      },
      {
        question: "I ___ (try) to call you all morning, but your phone was off.",
        options: [
          { label: "A. was trying", value: "A" },
          { label: "B. have been trying", value: "B" },
          { label: "C. had been trying", value: "C" , isCorrect: true},
          { label: "D. tried", value: "D" },
        ],
      },
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
            <h1 className="latihan-soal1-title">Mode Bionik</h1>
            <h2>Quiz Selesai!</h2>
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
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
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
              <p>{currentQuestion.explanation}</p>
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
              onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
            >
              {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default KuisPastPerfectContinuousTense;
