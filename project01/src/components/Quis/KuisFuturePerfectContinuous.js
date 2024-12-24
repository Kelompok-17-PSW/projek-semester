import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisPerfectContinuousTense = () => {
 const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
  
    const questions = [
      {
        question: "They ... (study) English for three years by the time they finish their course.",
        options: [
          { label: "A. will have studied", value: "A", isCorrect: true },
          { label: "B. will have been waiting", value: "B" },
          { label: "C. will be waiting", value: "C" },
          { label: "D. will wait", value: "D" },
        ],
      },
      {
        question: "By the time you finish your dinner, I ... (clean) the house for two hours.",
        options: [
          { label: "A. will clean", value: "A" },
          { label: "B. will have cleaned", value: "B" },
          { label: "C. will have been cleaning", value: "C", isCorrect: true },
          { label: "D. will be cleaning", value: "D" },
        ],
      },
      {
        question: "In two years, they ... (live) in this city for 15 years.",
        options: [
          { label: "A. shall live", value: "A" },
          { label: "B. shall have lived", value: "B" },
          { label: "C. shall be living", value: "C" },
          { label: "D. shall have been living", value: "D", isCorrect: true },
        ],
      },
      {
        question: "In a few months, ... you ... (work) on this project for a year?",
        options: [
          { label: "A. shall / have been working", value: "A", isCorrect: true },
          { label: "B. shall / be working", value: "B" },
          { label: "C. shall / have worked", value: "C" },
          { label: "D. shall / work", value: "D" },
        ],
      },
      {
        question: "In two weeks, ... they ... (travel) for a month?",
        options: [
          { label: "A. will / travel", value: "A" },
          { label: "B. will / have traveled", value: "B" },
          { label: "C. will / have been traveling", value: "C", isCorrect: true },
          { label: "D. will / be traveling", value: "D" },
        ],
      },
      {
        question: "By next year, I ______ (work) at this company for five years.",
        options: [
          { label: "A. will have been working", value: "A", isCorrect: true },
          { label: "B. will be working", value: "B" },
          { label: "C. will have worked", value: "C" },
          { label: "D. will work", value: "D" },
        ],
      },
      {
        question: "Which sentence is in Future Perfect Continuous Tense?",
        options: [
          { label: "A. She will be studying English for three hours tomorrow.", value: "A" },
          { label: "B. She will have been studying English for three hours by the time you arrive.", value: "B", isCorrect: true },
          { label: "C. She has been studying English for three hours.", value: "C" },
          { label: "D. She will study English tomorrow.", value: "D" },
        ],
      },
      {
        question: "By the time he retires, he ______ (teach) at the university for 40 years.",
        options: [
          { label: "A. will teach", value: "A" },
          { label: "B. will have been teaching", value: "B", isCorrect: true },
          { label: "C. will have taught", value: "C" },
          { label: "D. will be teaching", value: "D" },
        ],
      },
      {
        question: "In December, they ______ (build) the bridge for two years.",
        options: [
          { label: "A. will have been building", value: "A", isCorrect: true },
          { label: "B. will build", value: "B" },
          { label: "C. will be building", value: "C" },
          { label: "D. will have built", value: "D" },
        ],
      },
      {
        question: "How long ______ she ______ (train) for the marathon by the time it starts?",
        options: [
          { label: "A. will / be training", value: "A" },
          { label: "B. will / have trained", value: "B" },
          { label: "C. will / have been training", value: "C", isCorrect: true },
          { label: "D. will / train", value: "D" },
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
            <h1 className="latihan-soal1-title">Latihan Soal Future Perfect Continuos</h1>
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
          <h1 className="latihan-soal1-title">Latihan Soal</h1>
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

export default KuisPerfectContinuousTense;
