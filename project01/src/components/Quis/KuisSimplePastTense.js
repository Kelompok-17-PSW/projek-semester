import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisSimplePastTense = () => {
   const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
  
    const questions = [
      {
        question: "She ___ a letter yesterday. (write)",
        options: [
          { label: "A. write", value: "A"},
          { label: "B. wrote", value: "B", isCorrect: true  },
          { label: "C. written", value: "C" },
          { label: "D. writes", value: "D" },
        ],
      },
      {
        question: "I ___ the book on the table. (put)",
        options: [
          { label: "A. puts", value: "A" },
          { label: "B. putting", value: "B" },
          { label: "C. putted", value: "C" },
          { label: "D. put", value: "D" , isCorrect: true },
        ],
      },
      {
        question: "They ___ to the cinema last night. (go)",
        options: [
          { label: "A. went", value: "A",isCorrect: true },
          { label: "B. go", value: "B"},
          { label: "C. going", value: "C" },
          { label: "D. gone", value: "D" },
        ],
      },
      {
        question: "He ___ his homework last night. (do)",
        options: [
          { label: "A. done", value: "A"},
          { label: "B. doing", value: "B" },
          { label: "C. does", value: "C" },
          { label: "D. did", value: "D", isCorrect: true },
        ],
      },
      {
        question: "We ___ a great time at the party. (have)",
        options: [
          { label: "A. had", value: "A" },
          { label: "B. haved", value: "B" },
          { label: "C. have", value: "C" , isCorrect: true},
          { label: "D. has", value: "D" },
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

export default KuisSimplePastTense;
