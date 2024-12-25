import React, { useState } from "react";
import "./QuestionPage.css";

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
              { label: "A. has been working", value: "A", isCorrect: true },
              { label: "B. has worked", value: "B" },
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
              { label: "D. have lived", value: "D" },
          ],
      },
      {
          question: "He ___ the book for 2 hours. (read)",
          options: [
              { label: "A. has read", value: "A" },
              { label: "B. has been reading", value: "B", isCorrect: true },
              { label: "C. is reading", value: "C" },
              { label: "D. reads", value: "D" },
          ],
      },
      {
          question: "I ___ all day and I'm tired now. (study)",
          options: [
              { label: "A. am studying", value: "A" },
              { label: "B. studies", value: "B" },
              { label: "C. have been studying", value: "C", isCorrect: true },
              { label: "D. studied", value: "D" },
          ],
      },
      {
          question: "We ___ for you since 9 AM. (wait)",
          options: [
              { label: "A. wait", value: "A" },
              { label: "B. waited", value: "B" },
              { label: "C. are waiting", value: "C" },
              { label: "D. have been waiting", value: "D", isCorrect: true },
          ],
      },
      {
          question: "He ___ at the same job for 10 years. (work)",
          options: [
              { label: "A. has been working", value: "A", isCorrect: true },
              { label: "B. has worked", value: "B" },
              { label: "C. works", value: "C" },
              { label: "D. is working", value: "D" },
          ],
      },
      {
          question: "She ___ on her thesis for months. (focus)",
          options: [
              { label: "A. has focused", value: "A" },
              { label: "B. is focusing", value: "B" },
              { label: "C. has been focusing", value: "C", isCorrect: true },
              { label: "D. focused", value: "D" },
          ],
      },
      {
          question: "I ___ to improve my English skills. (try)",
          options: [
              { label: "A. have tried", value: "A" },
              { label: "B. have been trying", value: "B", isCorrect: true },
              { label: "C. tried", value: "C" },
              { label: "D. try", value: "D" },
          ],
      },
      {
          question: "They ___ the project for weeks without any progress. (discuss)",
          options: [
              { label: "A. have been discussing", value: "A", isCorrect: true },
              { label: "B. are discussing", value: "B" },
              { label: "C. discussed", value: "C" },
              { label: "D. have discussed", value: "D" },
          ],
      },
      {
          question: "We ___ for a solution to this issue. (search)",
          options: [
              { label: "A. searched", value: "A" },
              { label: "B. are searching", value: "B" },
              { label: "C. have searched", value: "C" },
              { label: "D. have been searching", value: "D", isCorrect: true },
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
                  <h1 className="latihan-soal1-title">Latihan Soal Present Perfect Continuous Tense</h1>
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
              <h1 className="latihan-soal1-title">Latihan Soal Present Perfect Continuous Tense</h1>
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
