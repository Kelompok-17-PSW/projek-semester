import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisSimplePresentTense = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "He ___ to school every day. (go)",
      options: [
        { label: "A. goes", value: "A", isCorrect: true },
        { label: "B. go", value: "B" },
        { label: "C. going", value: "C" },
        { label: "D. gone", value: "D" },
      ],
    },
    {
      question: "They ___ soccer every weekend. (play)",
      options: [
        { label: "A. plays", value: "A" },
        { label: "B. played", value: "B" },
        { label: "C. play", value: "C", isCorrect: true },
        { label: "D. playing", value: "D" },
      ],
    },
    {
      question: "You ___ very well. (speak)",
      options: [
        { label: "A. speaks", value: "A" },
        { label: "B. speak", value: "B", isCorrect: true },
        { label: "C. speaking", value: "C" },
        { label: "D. spoken", value: "D" },
      ],
    },
    {
      question: "I ___ water every morning. (drink)",
      options: [
        { label: "A. drink", value: "A", isCorrect: true },
        { label: "B. drinks", value: "B" },
        { label: "C. drinking", value: "C" },
        { label: "D. drank", value: "D" },
      ],
    },
    {
      question: "They ___ the house every weekend. (clean)",
      options: [
        { label: "A. cleans", value: "A" },
        { label: "B. cleaning", value: "B" },
        { label: "C. clean", value: "C", isCorrect: true },
        { label: "D. cleaned", value: "D" },
      ],
    },
    {
      question: "She always ___ tea in the afternoon. (drink)",
      options: [
        { label: "A. drinks", value: "A", isCorrect: true },
        { label: "B. drink", value: "B" },
        { label: "C. drinking", value: "C" },
        { label: "D. drank", value: "D" },
      ],
    },
    {
      question: "The sun ___ in the east. (rise)",
      options: [
        { label: "A. rise", value: "A" },
        { label: "B. rises", value: "B", isCorrect: true },
        { label: "C. rising", value: "C" },
        { label: "D. risen", value: "D" },
      ],
    },
    {
      question: "He ___ TV every evening. (watch)",
      options: [
        { label: "A. watches", value: "A", isCorrect: true },
        { label: "B. watch", value: "B" },
        { label: "C. watching", value: "C" },
        { label: "D. watched", value: "D" },
      ],
    },
    {
      question: "We ___ to the park every Saturday. (go)",
      options: [
        { label: "A. goes", value: "A" },
        { label: "B. go", value: "B", isCorrect: true },
        { label: "C. going", value: "C" },
        { label: "D. gone", value: "D" },
      ],
    },
    {
      question: "She ___ breakfast at 7 AM every day. (have)",
      options: [
        { label: "A. have", value: "A" },
        { label: "B. has", value: "B", isCorrect: true },
        { label: "C. having", value: "C" },
        { label: "D. had", value: "D" },
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
          <h1 className="latihan-soal1-title">Latihan Soal Simple Present Tense</h1>
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
        <h1 className="latihan-soal1-title">Latihan Soal Simple Present Tense</h1>
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

export default KuisSimplePresentTense;
