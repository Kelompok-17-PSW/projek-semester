import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisPastContinuousTense = () => {
  const [answers, setAnswers] = useState([]);
         const [isAnswered, setIsAnswered] = useState(false);
         const [isCorrect, setIsCorrect] = useState(false);
         const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
         const [score, setScore] = useState(0);
         const [isFinished, setIsFinished] = useState(false);
       
         const questions = [
           {
             question: "She ___ (study) when I called her.",
             options: [
               { label: "A. were studying", value: "A"},
               { label: "B. is studying", value: "B"},
               { label: "C. was studying", value: "C" , isCorrect: true},
               { label: "D. studied", value: "D" },
             ],
           },
           {
             question: "They ___ (watch) a movie when the lights went out",
             options: [
               { label: "A.watch", value: "A" },
               { label: "B. watched", value: "B"},
               { label: "C. were wacthed", value: "C" },
               { label: "D. were wachting", value: "D", isCorrect: true},
             ],
           },
           {
             question: "At this time last week, we ___ (eat) dinner.",
             options: [
               { label: "A. were eating", value: "A", isCorrect: true },
               { label: "B. eat", value: "B" },
               { label: "C. are eating", value: "C" },
               { label: "D. ate", value: "D" },
             ],
           },
           {
             question: " I ___ (do) my homework when you arrived",
             options: [
               { label: "A. is doing", value: "A" },
               { label: "B. were doing", value: "B"},
               { label: "C. was doing", value: "C", isCorrect: true },
               { label: "D. did", value: "D" },
             ],
           },
           {
             question: "They ___ (not work) when the boss came in.",
             options: [
               { label: "A. didn't work", value: "A" },
               { label: "B. weren't working", value: "B" , isCorrect: true},
               { label: "C. not working", value: "C"},
               { label: "D. didn't work", value: "D" },
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

export default KuisPastContinuousTense;
