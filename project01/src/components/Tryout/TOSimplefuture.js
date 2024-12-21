import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tryout.css";
import Timer from "./Timer";
import Question from "./Question";

const TOSimplefuture = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. I _____ (help) you with your homework later", options: ["help", "will help", "am helping", "helped"], answer: "will help" },
    { question: "2. They _____ (not/attend) the seminar tomorrow", options: ["don’t attend", " won’t attend", " didn’t attend", "aren’t attendinga"], answer: " won’t attend" },
    { question: "3. What _____ you _____ (do) after this class?", options: ["do, do", " did, do", "will, do", "are, doing"], answer: "will, do" },
    { question: "4. By next year, we _____ (move) to a new city.", options: ["will move", " moved", "move", "are moving"], answer: "will move" },
    { question: "5. The students _____ (not/understand) the lesson unless the teacher explains it again.", options: [" don’t understand", "won’t understand", "didn’t understand", "aren’t understanding"], answer: "won’t understand" },
    { question: "6. I _____ (probably/see) him at the meeting tomorrow.", options: ["probably see", " will probably see", "saw", "am probably seeing"], answer: " will probably see" },
    { question: "7. By the end of the month, the company _____ (launch) a new product.", options: [" launches", "launched", "will launch", "is launching"], answer: "will launch" },
    { question: "8. I _____ (send) you an email as soon as I finish the report", options: ["send", " am sending", "sent", "will send"], answer: "will send" },
    { question: "9. The train _____ (leave) at 7:30 tomorrow morning.", options: ["leaves", " left", "will leave", " is leaving"], answer: "will leave" },
    { question: "10. By the time you arrive, we _____ (start) the meeting.", options: [" start", "started", "will start", "will have started"], answer: "will have started" },
    { question: "11. _____ they _____ (help) us with the project?", options: ["Will, help", "Do, help", "Are, helping", "Did, help"], answer: "Will, help" },
    { question: "12. We _____ (visit) Bali next summer.", options: ["visit", "will visit", "visited", "are visiting"], answer: "will visit" },
    { question: "13. The government _____ (introduce) new policies next year.", options: ["introduces", "introduced", " will introduce", "is introducing"], answer: " will introduce" },
    { question: "14. I _____ (not/buy) that book unless it’s on sale.", options: ["don’t buy", " am not buying", "didn’t buy", " won’t buy"], answer: " won’t buy" },
    { question: "15. I think she _____ (be) a great teacher in the future.", options: ["is", "was", "will be", "will being"], answer: "will be" },
    { question: "16. _____ you _____ (attend) the conference next week?", options: [" Do, attend", "Will, attend", "Are, attending", "Did, attend"], answer: "Will, attend" },
    { question: "17. She _____ (probably/not/come) to the meeting.", options: ["doesn’t probably come", "won’t probably come", " probably won’t come", "isn’t probably coming"], answer: " probably won’t come" },
    { question: "18. If we leave now, we _____ (catch) the last bus.", options: [" catch", "will catch", "caught", " are catching"], answer: "will catch" },
    { question: "19. The doctor _____ (not/see) patients tomorrow afternoon", options: ["won’t see", "doesn’t see", "didn’t see", "isn’t seeing"], answer: "won’t see" },
    { question: "20. I _____ (not/buy) that book unless it’s on sale.", options: ["don’t buy", "am not buying", "didn’t buy", " won’t buy"], answer: " won’t buy" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleContinue = () => {
    setShowResult(false);
    setCurrentQuestion(0); 
    setScore(0); 
  };

  return (
    <div className="app">
      <h1>Tryout Biologi Kelas XI</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
          <button onClick={handleContinue} className="continue-button">Ulangi Tryout</button>
        </div>
      ) : (
        <>
          <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          />
        </>
      )}
    </div>
  );
};

export default TOSimplefuture;