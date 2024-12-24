import React, { useState} from "react";
import "../Quis/KuisSimplePast.css"; 

function KuisFuturePerfect() {
       const [answers, setAnswers] = useState([]);
       const [isAnswered, setIsAnswered] = useState(false);
       const [isCorrect, setIsCorrect] = useState(false);
       const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
       const [score, setScore] = useState(0);
       const [isFinished, setIsFinished] = useState(false);
     
       const questions = [
         {
           question: "Adam ... up all of the foods by the time we come. (eat)",
           options: [
             { label: "A. Will has eat", value: "A"},
             { label: "B. Will eaten", value: "B"},
             { label: "C. Will have eaten", value: "C" , isCorrect: true},
             { label: "D. Will have eat", value: "D" },
           ],
         },
         {
           question: "By this time next week, Jennifer ... in Oxford University for 3 years.",
           options: [
             { label: "A. Have studied", value: "A" },
             { label: "B. Has studied", value: "B"},
             { label: "C. Will study", value: "C" },
             { label: "D. Will have studied", value: "D", isCorrect: true},
           ],
         },
         {
           question: "... you ... the book by this time next week?",
           options: [
             { label: "A. Will, have returned", value: "A", isCorrect: true },
             { label: "B. Will, be returning", value: "B" },
             { label: "C. Will, return", value: "C" },
             { label: "D. Will, have been returning", value: "D" },
           ],
         },
         {
           question: " The food ... before the guests come.",
           options: [
             { label: "A. Will be prepared", value: "A" },
             { label: "B. Is prepared", value: "B"},
             { label: "C. Will have been prepared", value: "C", isCorrect: true },
             { label: "D. Will prepare", value: "D" },
           ],
         },
         {
           question: "The show will start at 8 AM. It ... when you come by 1 PM tomorrow",
           options: [
             { label: "A. Will finish", value: "A" },
             { label: "B. Will have finished", value: "B" , isCorrect: true},
             { label: "C. Will be finishing", value: "C"},
             { label: "D. Finish", value: "D" },
           ],
         },
         {
          question: "By this time next year, she ______ (finish) her degree.",
          options: [
            { label: "A. will finish", value: "A" },
            { label: "B. will have finished", value: "B", isCorrect: true },
            { label: "C. will be finishing", value: "C" },
            { label: "D. will have been finishing", value: "D" },
          ],
        },
        {
          question: "By the time you arrive, I ______ (prepare) dinner.",
          options: [
            { label: "A. will have prepared", value: "A", isCorrect: true },
            { label: "B. will prepare", value: "B" },
            { label: "C. will be preparing", value: "C" },
            { label: "D. will have been preparing", value: "D" },
          ],
        },
        {
          question: "They ______ (complete) the project before the deadline.",
          options: [
            { label: "A. will complete", value: "A" },
            { label: "B. will have completed", value: "B", isCorrect: true },
            { label: "C. will have been completing", value: "C" },
            { label: "D. will be completing", value: "D" },
          ],
        },
        {
          question: "By next month, we ______ (move) into our new house.",
          options: [
            { label: "A. will move", value: "A" },
            { label: "B. will be moving", value: "B" },
            { label: "C. will have moved", value: "C", isCorrect: true },
            { label: "D. will have been moving", value: "D" },
          ],
        },
        {
          question: "By the end of this week, he ______ (write) three chapters of his book.",
          options: [
            { label: "A. will write", value: "A" },
            { label: "B. will have written", value: "B", isCorrect: true },
            { label: "C. will have been writing", value: "C" },
            { label: "D. will be writing", value: "D" },
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
               <h1 className="latihan-soal1-title">Latihan Soal</h1>
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
             <h1 className="latihan-soal1-title">Latihan Soal Future Perfect</h1>
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

export default KuisFuturePerfect;
