import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentPerfectContinuousTense = () => {
     const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
  
    const questions = [
      {
        question: "She ___ at the company for 5 years. (work)",
        options: [
          { label: "A. has been working", value: "A", isCorrect: true},
          { label: "B. has worked", value: "B"},
          { label: "C. is working", value: "C" },
          { label: "D. has been working", value: "D" },
        ],
      },
      {
        question: "They ___ in Paris since 2010. (live)",
        options: [
          { label: "A. have been living", value: "A", isCorrect: true },
          { label: "B. are living", value: "B" },
          { label: "C. lived", value: "C" },
          { label: "D. have lived", value: "D"  },
        ],
      },
      {
        question: "He ___ the book for 2 hours. (read)",
        options: [
          { label: "A. has read", value: "A"},
          { label: "B. has been reading", value: "B", isCorrect: true  },
          { label: "C. is reading", value: "C" },
          { label: "D. reads", value: "D" },
        ],
      },
      {
        question: "I ___ all day and I'm tired now. (study)",
        options: [
          { label: "A. am studying", value: "A"},
          { label: "B. studies", value: "B" },
          { label: "C. have been studying", value: "C", isCorrect: true  },
          { label: "D. studied", value: "D" },
        ],
      },
      {
        question: "We ___ for you since 9 AM. (wait)",
        options: [
          { label: "A. wait", value: "A" },
          { label: "B. waited", value: "B" },
          { label: "C. Sare waiting", value: "C"},
          { label: "D. have been waiting", value: "D", isCorrect: true },
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

export default KuisPresentPerfectContinuousTense;
