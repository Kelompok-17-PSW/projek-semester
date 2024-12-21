import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Tryout/css/01.css";

const ToPresent = () => {
  const navigate = useNavigate();

  const questions = [
    { question: "1. What is the function of the enzyme catalase?", options: ["Break down fat", "Decompose hydrogen peroxide", "Convert starch", "Transport oxygen"], answer: "Decompose hydrogen peroxide" },
    { question: "2. Where does photosynthesis occur?", options: ["Chloroplast", "Cytoplasm", "Ribosome", "Mitochondria"], answer: "Chloroplast" },
    { question: "3. What is the smallest unit of living organisms?", options: ["Cell", "Tissue", "Organ", "Organ system"], answer: "Cell" },
    { question: "4. What is the main product of photosynthesis?", options: ["Glucose and oxygen", "Carbon dioxide", "Water and oxygen", "ATP and NADPH"], answer: "Glucose and oxygen" },
    { question: "5. Where does glycolysis take place?", options: ["Cytoplasm", "Mitochondria", "Chloroplast", "Nucleus"], answer: "Cytoplasm" },
    { question: "6. What is the main function of mitochondria?", options: ["Energy production", "Protein synthesis", "Photosynthesis", "DNA replication"], answer: "Energy production" },
    { question: "7. Which hormone regulates blood sugar levels?", options: ["Insulin", "Adrenaline", "Cortisol", "Thyroxine"], answer: "Insulin" },
    { question: "8. What is the stage of cell division where chromosomes align in the center?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "Metaphase" },
    { question: "9. What is the function of stomata in leaves?", options: ["Regulate gas exchange", "Absorb water", "Transport photosynthesis products", "Protect leaf surface"], answer: "Regulate gas exchange" },
    { question: "10. What organ filters blood in the excretory system?", options: ["Kidney", "Liver", "Heart", "Lungs"], answer: "Kidney" },
    { question: "11. In aerobic respiration, at what stage is oxygen used?", options: ["Krebs cycle", "Glycolysis", "Electron transport chain", "Fermentation"], answer: "Electron transport chain" },
    { question: "12. What is the main component of the cell membrane?", options: ["Phospholipids", "Proteins", "Carbohydrates", "Cholesterol"], answer: "Phospholipids" },
    { question: "13. What is the primary function of hemoglobin in the blood?", options: ["Transport oxygen", "Regulate body temperature", "Control blood sugar", "Fight infections"], answer: "Transport oxygen" },
    { question: "14. What is the end product of alcoholic fermentation?", options: ["Ethanol and carbon dioxide", "Lactic acid", "Water and oxygen", "ATP"], answer: "Ethanol and carbon dioxide" },
    { question: "15. What organism is at the start of the food chain?", options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"], answer: "Producers" },
    { question: "16. What tissue transports photosynthesis products?", options: ["Phloem", "Xylem", "Epidermis", "Parenchyma"], answer: "Phloem" },
    { question: "17. What is the process of water molecule movement through a membrane called?", options: ["Osmosis", "Diffusion", "Endocytosis", "Exocytosis"], answer: "Osmosis" },
    { question: "18. What is the male reproductive organ in flowering plants?", options: ["Stamen", "Carpel", "Anther", "Ovary"], answer: "Stamen" },
    { question: "19. What happens if stomata remain closed for too long in plants?", options: ["Photosynthesis decreases", "Water absorption increases", "Transpiration increases", "Gas exchange increases"], answer: "Photosynthesis decreases" },
    { question: "20. What is meristem tissue?", options: ["Tissue that actively divides", "Protective tissue", "Transport tissue", "Supportive tissue"], answer: "Tissue that actively divides" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [timeLeft]);

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

  const handleRetry = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(600);
  };

  return (
    <div className="app">
      <h1>Tryout Present Tenses</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <p>You have completed the tryout. Thank you for participating!</p>
          <button onClick={handleRetry} className="continue-button">Retry</button>
        </div>
      ) : (
        <>
          <div className="timer">Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</div>
          <div className="question-section">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)} className="option-button">
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToPresent;
