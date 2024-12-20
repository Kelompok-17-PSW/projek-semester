import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPresentContinuousTense = () => {
 const [answers, setAnswers] = useState([]);
   const [isAnswered, setIsAnswered] = useState(false);
   const [isCorrect, setIsCorrect] = useState(false);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [score, setScore] = useState(0);
   const [isFinished, setIsFinished] = useState(false);
 
   const questions = [
     {
       question: "He ___ a book now. (read)",
       options: [
         { label: "A. reads", value: "A"},
         { label: "B. is reading", value: "B", isCorrect: true  },
         { label: "C. was reading", value: "C" },
         { label: "D. read", value: "D" },
       ],
     },
     {
       question: "They ___ soccer at the moment. (play)",
       options: [
         { label: "A. Were play", value: "A" },
         { label: "B. played", value: "B" },
         { label: "C. play", value: "C" },
         { label: "D. are playing", value: "D" , isCorrect: true },
       ],
     },
     {
       question: "She ___ dinner right now. (cook)",
       options: [
         { label: "A. was cooking", value: "A"},
         { label: "B. is cooking", value: "B", isCorrect: true  },
         { label: "C. cooked", value: "C" },
         { label: "D. cooks", value: "D" },
       ],
     },
     {
       question: "I ___ for my keys. (look)",
       options: [
         { label: "A. am looking", value: "A", isCorrect: true },
         { label: "B. looks", value: "B" },
         { label: "C. was looking", value: "C" },
         { label: "D. looked", value: "D" },
       ],
     },
     {
       question: "The baby ___ right now. (cry)",
       options: [
         { label: "A. cried", value: "A" },
         { label: "B. creis", value: "B" },
         { label: "C. is crying", value: "C" , isCorrect: true},
         { label: "D. cry", value: "D" },
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

export default KuisPresentContinuousTense;
