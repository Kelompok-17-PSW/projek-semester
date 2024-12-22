import React, { useState} from "react";
import "../Quis/KuisSimplePast.css"; 

function KuisSimpleFuture() {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "I ecpect, they ... me this evening. (phone)",
      options: [
        { label: "A. Will not phone", value: "A"},
        { label: "B. Will phone", value: "B", isCorrect: true  },
        { label: "C. Would phone", value: "C" },
        { label: "D. Are no phone", value: "D" },
      ],
    },
    {
      question: "Don't touch this palte, if you touch it, you ... yourself. (burn)",
      options: [
        { label: "A. Will not be burn", value: "A" },
        { label: "B. Will not burn", value: "B" },
        { label: "C. Will be burn", value: "C" },
        { label: "D. Will burn", value: "D" , isCorrect: true },
      ],
    },
    {
      question: "We ... house next month. (make)",
      options: [
        { label: "A. Will not make", value: "A"},
        { label: "B. Will make", value: "B", isCorrect: true  },
        { label: "C. is making", value: "C" },
        { label: "D. Would made", value: "D" },
      ],
    },
    {
      question: "My sister ... not ... to the concert tonight.(go)",
      options: [
        { label: "A. Will/go", value: "A", isCorrect: true },
        { label: "B. Will/going", value: "B" },
        { label: "C. Did/go", value: "C" },
        { label: "D. Do/go", value: "D" },
      ],
    },
    {
      question: "... i help you to take dinner?",
      options: [
        { label: "A. Is", value: "A" },
        { label: "B. Am", value: "B" },
        { label: "C. Shall", value: "C" , isCorrect: true},
        { label: "D. Are", value: "D" },
      ],
    },
    {
      question: "If it rains, we ______ (stay) at home.",
      options: [
        { label: "A. will stay", value: "A", isCorrect: true },
        { label: "B. stays", value: "B" },
        { label: "C. stayed", value: "C"},
        { label: "D. are staying", value: "D" },
      ],
    },
    {
      question: "I ______ (help) you if you need assistance.",
      options: [
        { label: "A. helped", value: "A" },
        { label: "B. helping", value: "B" },
        { label: "C. will help", value: "C" , isCorrect: true},
        { label: "D. helps", value: "D" },
      ],
    },
    {
      question: "They ______ (finish) the project by next week",
      options: [
        { label: "A. finishes", value: "A" },
        { label: "B. will finish", value: "B", isCorrect: true },
        { label: "C.finished", value: "C"},
        { label: "D. are finishing", value: "D" },
      ],
    },
    {
      question: "I ______ (call) you as soon as I get home.",
      options: [
        { label: "A. called", value: "A" },
        { label: "B. calling", value: "B" },
        { label: "C. calls", value: "C"},
        { label: "D.  will call", value: "D", isCorrect: true },
      ],
    },
    {
      question: "Choose the correct sentence using Simple Future Tense:",
      options: [
        { label: "A. We will meet you at the park.", value: "A", isCorrect: true },
        { label: "B. We met you at the park.", value: "B" },
        { label: "C.  We are meeting you at the park.", value: "C"},
        { label: "D. We meet you at the park", value: "D" },
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

export default KuisSimpleFuture;
