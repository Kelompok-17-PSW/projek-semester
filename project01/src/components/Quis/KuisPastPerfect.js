import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPastPerfectTense = () => {
   const [answers, setAnswers] = useState([]);
   const [isAnswered, setIsAnswered] = useState(false);
   const [isCorrect, setIsCorrect] = useState(false);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [score, setScore] = useState(0);
   const [isFinished, setIsFinished] = useState(false);

   const questions = [
     {
       question: "By the time I arrived, they ___ (finish) the meeting",
       options: [
         { label: "A. had finished", value: "A", isCorrect: true},
         { label: "B. finished", value: "B" },
         { label: "C. have finished", value: "C" },
         { label: "D. was finishing", value: "D" },
       ],
     },
     {
       question: "She ___ (leave) before I could speak to her",
       options: [
         { label: "A. left", value: "A"},
         { label: "B. had left", value: "B", isCorrect: true  },
         { label: "C. have left", value: "C" },
         { label: "D. was leaving", value: "D" },
       ],
     },
     {
       question: "I ___ (never, see) such a beautiful sunset before",
       options: [
         { label: "A. never saw", value: "A"},
         { label: "B. had never seen", value: "B", isCorrect: true  },
         { label: "C. have never seen", value: "C" },
         { label: "D. was never seeing", value: "D" },
       ],
     },
     {
       question: "She ___ (already, finish) her homework when I called her",
       options: [
         { label: "A. has already finished", value: "A" },
         { label: "B. was already finishing", value: "B" },
         { label: "C. finished already", value: "C" },
         { label: "D. had already finished", value: "D", isCorrect: true },
       ],
     },
     {
       question: "They ___ (just, arrive) when the ceremony began.",
       options: [
         { label: "A. was just arriving", value: "A" },
         { label: "B. arrived just", value: "B" },
         { label: "C. had just arrived", value: "C" , isCorrect: true},
         { label: "D. have just arrived", value: "D" },
       ],
     },
     {
       question: "By the time we got there, the movie ___ (start).",
       options: [
         { label: "A. had started", value: "A", isCorrect: true },
         { label: "B. started", value: "B" },
         { label: "C. have started", value: "C" },
         { label: "D. was starting", value: "D" },
       ],
     },
     {
       question: "He ___ (leave) before I arrived.",
       options: [
         { label: "A. had left", value: "A", isCorrect: true },
         { label: "B. left", value: "B" },
         { label: "C. was leaving", value: "C" },
         { label: "D. leaves", value: "D" },
       ],
     },
     {
       question: "She ___ (finish) her work before the deadline.",
       options: [
         { label: "A. had finished", value: "A", isCorrect: true },
         { label: "B. finished", value: "B" },
         { label: "C. finishes", value: "C" },
         { label: "D. was finishing", value: "D" },
       ],
     },
     {
       question: "We ___ (see) that movie before.",
       options: [
         { label: "A. had seen", value: "A", isCorrect: true },
         { label: "B. saw", value: "B" },
         { label: "C. see", value: "C" },
         { label: "D. were seeing", value: "D" },
       ],
     },
     {
       question: "By the time the show started, they ___ (leave).",
       options: [
         { label: "A. had left", value: "A", isCorrect: true },
         { label: "B. left", value: "B" },
         { label: "C. leave", value: "C" },
         { label: "D. were leaving", value: "D" },
       ],
     },
     {
       question: "She ___ (eat) before we arrived.",
       options: [
         { label: "A. had eaten", value: "A", isCorrect: true },
         { label: "B. ate", value: "B" },
         { label: "C. was eating", value: "C" },
         { label: "D. eats", value: "D" },
       ],
     },
     {
       question: "By the time they arrived, we ___ (finish) our work.",
       options: [
         { label: "A. had finished", value: "A", isCorrect: true },
         { label: "B. finished", value: "B" },
         { label: "C. were finishing", value: "C" },
         { label: "D. finish", value: "D" },
       ],
     },
     {
       question: "I ___ (meet) her before you introduced us.",
       options: [
         { label: "A. had met", value: "A", isCorrect: true },
         { label: "B. met", value: "B" },
         { label: "C. meet", value: "C" },
         { label: "D. was meeting", value: "D" },
       ],
     },
     {
       question: "By the time the class started, I ___ (do) my homework.",
       options: [
         { label: "A. had done", value: "A", isCorrect: true },
         { label: "B. did", value: "B" },
         { label: "C. do", value: "C" },
         { label: "D. was doing", value: "D" },
       ],
     },
     {
       question: "She ___ (read) the book before the movie came out.",
       options: [
         { label: "A. had read", value: "A", isCorrect: true },
         { label: "B. read", value: "B" },
         { label: "C. was reading", value: "C" },
         { label: "D. reads", value: "D" },
       ],
     },
     {
       question: "By the time he arrived, she ___ (go) home.",
       options: [
         { label: "A. had gone", value: "A", isCorrect: true },
         { label: "B. went", value: "B" },
         { label: "C. was going", value: "C" },
         { label: "D. goes", value: "D" },
       ],
     },
     {
       question: "They ___ (not finish) the report before the meeting.",
       options: [
         { label: "A. had not finished", value: "A", isCorrect: true },
         { label: "B. did not finish", value: "B" },
         { label: "C. was not finishing", value: "C" },
         { label: "D. were not finishing", value: "D" },
       ],
     },
     {
       question: "We ___ (not eat) before we left.",
       options: [
         { label: "A. had not eaten", value: "A", isCorrect: true },
         { label: "B. did not eat", value: "B" },
         { label: "C. was not eating", value: "C" },
         { label: "D. were not eating", value: "D" },
       ],
     },
     {
       question: "She ___ (not see) him before the party.",
       options: [
         { label: "A. had not seen", value: "A", isCorrect: true },
         { label: "B. did not see", value: "B" },
         { label: "C. was not seeing", value: "C" },
         { label: "D. were not seeing", value: "D" },
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
          <h1 className="latihan-soal1-title">Latihan Soal Past Perfect Tense</h1>
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
        <h1 className="latihan-soal1-title">Latihan Soal Past Perfect Tense</h1>
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

export default KuisPastPerfectTense;

