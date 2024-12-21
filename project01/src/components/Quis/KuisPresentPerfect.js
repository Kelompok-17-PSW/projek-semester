import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentPerfectTense = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
      {
          question: "She ___ the cake. (make)",
          options: [
              { label: "A. made", value: "A" },
              { label: "B. makes", value: "B" },
              { label: "C. has made", value: "C", isCorrect: true },
              { label: "D. is making", value: "D" },
          ],
      },
      {
          question: "I ___ my homework already. (finish)",
          options: [
              { label: "A. finishes", value: "A" },
              { label: "B. am finishing", value: "B" },
              { label: "C. finished", value: "C" },
              { label: "D. have finished", value: "D", isCorrect: true },
          ],
      },
      {
          question: "He ___ his wallet. (lose)",
          options: [
              { label: "A. has lost", value: "A", isCorrect: true },
              { label: "B. lost", value: "B" },
              { label: "C. is losing", value: "C" },
              { label: "D. loses", value: "D" },
          ],
      },
      {
          question: "We ___ this movie before. (see)",
          options: [
              { label: "A. saw", value: "A" },
              { label: "B. have seen", value: "B", isCorrect: true },
              { label: "C. has seen", value: "C" },
              { label: "D. see", value: "D" },
          ],
      },
      {
          question: "We ___ in this house for 5 years. (live)",
          options: [
              { label: "A. lived", value: "A" },
              { label: "B. live", value: "B" },
              { label: "C. have lived", value: "C", isCorrect: true },
              { label: "D. are living", value: "D" },
          ],
      },
      {
          question: "They ___ their car recently. (buy)",
          options: [
              { label: "A. bought", value: "A" },
              { label: "B. have bought", value: "B", isCorrect: true },
              { label: "C. are buying", value: "C" },
              { label: "D. buys", value: "D" },
          ],
      },
      {
          question: "I ___ my keys somewhere. (lose)",
          options: [
              { label: "A. lost", value: "A" },
              { label: "B. am losing", value: "B" },
              { label: "C. have lost", value: "C", isCorrect: true },
              { label: "D. lose", value: "D" },
          ],
      },
      {
          question: "She ___ a new book. (write)",
          options: [
              { label: "A. has written", value: "A", isCorrect: true },
              { label: "B. wrote", value: "B" },
              { label: "C. writes", value: "C" },
              { label: "D. is writing", value: "D" },
          ],
      },
      {
          question: "We ___ a lot about this topic. (learn)",
          options: [
              { label: "A. learn", value: "A" },
              { label: "B. have learned", value: "B", isCorrect: true },
              { label: "C. learned", value: "C" },
              { label: "D. are learning", value: "D" },
          ],
      },
      {
          question: "You ___ the meeting. (miss)",
          options: [
              { label: "A. missed", value: "A" },
              { label: "B. miss", value: "B" },
              { label: "C. have missed", value: "C", isCorrect: true },
              { label: "D. are missing", value: "D" },
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
                  <h1 className="latihan-soal1-title">Present Perfect Tense</h1>
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
              <h1 className="latihan-soal1-title">Present Perfect Tense</h1>
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

export default KuisPresentPerfectTense;
