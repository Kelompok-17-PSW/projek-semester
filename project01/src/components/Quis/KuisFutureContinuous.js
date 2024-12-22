import React, { useState} from "react";
import "../Quis/KuisSimplePast.css"; 

function KuisFutureContinuous() {
   const [answers, setAnswers] = useState([]);
      const [isAnswered, setIsAnswered] = useState(false);
      const [isCorrect, setIsCorrect] = useState(false);
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [score, setScore] = useState(0);
      const [isFinished, setIsFinished] = useState(false);
    
      const questions = [
        {
          question: "In a few minutes, she ... (give) her presentation to the team.",
          options: [
            { label: "A. will give", value: "A"},
            { label: "B. will be giving", value: "B", isCorrect: true },
            { label: "C. is giving", value: "C" },
            { label: "D. gives", value: "D" },
          ],
        },
        {
          question: "Tomorrow at noon, I ... (meet) my friends at the park.",
          options: [
            { label: "A. will meet", value: "A" },
            { label: "B. am meeting", value: "B"},
            { label: "C. meet", value: "C" },
            { label: "D. will be meeting", value: "D", isCorrect: true},
          ],
        },
        {
          question: "they ... help us with the project next week.",
          options: [
            { label: "A. shall", value: "A", isCorrect: true },
            { label: "B. will", value: "B" },
            { label: "C.would", value: "C" },
            { label: "D. are", value: "D" },
          ],
        },
        {
          question: " ...  you be attending the seminar next week?",
          options: [
            { label: "A. will", value: "A" },
            { label: "B. shall", value: "B", isCorrect: true },
            { label: "C. do", value: "C" },
            { label: "D. are", value: "D" },
          ],
        },
        {
          question: "... I be able to finish the report by tomorrow?",
          options: [
            { label: "A. can", value: "A" },
            { label: "B. do", value: "B" },
            { label: "C. will", value: "C" , isCorrect: true},
            { label: "D. shall", value: "D" },
          ],
        },
        {
          question: "This time tomorrow, I ______ (travel) to Bali.",
          options: [
            { label: "A. will travel", value: "A" },
            { label: "B. will have traveled", value: "B" },
            { label: "C. will be traveling", value: "C", isCorrect: true },
            { label: "D. will have been traveling", value: "D" },
          ],
        },
        {
          question: "At 7 PM tonight, they ______ (have) dinner at the restaurant.",
          options: [
            { label: "A. will have", value: "A" },
            { label: "B. will have had", value: "B" },
            { label: "C. will be having", value: "C", isCorrect: true },
            { label: "D. will have been having", value: "D" },
          ],
        },
        {
          question: "Next week, she ______ (work) on her new project.",
          options: [
            { label: "A. will work", value: "A" },
            { label: "B. will have worked", value: "B" },
            { label: "C. will be working", value: "C", isCorrect: true },
            { label: "D. will have been working", value: "D" },
          ],
        },
        {
          question: "When you call me, I ______ (watch) a movie.",
          options: [
            { label: "A. will watch", value: "A" },
            { label: "B. will be watching", value: "B", isCorrect: true },
            { label: "C. will have watched", value: "C" },
            { label: "D. will have been watching", value: "D" },
          ],
        },
        {
          question: "By this time tomorrow, he ______ (drive) to his hometown.",
          options: [
            { label: "A. will drive", value: "A" },
            { label: "B. will be driving", value: "B", isCorrect: true },
            { label: "C. will have driven", value: "C" },
            { label: "D. will have been driving", value: "D" },
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
              <h1 className="latihan-soal1-title">Future Continuous</h1>
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
 

export default KuisFutureContinuous;
