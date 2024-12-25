import React, { useState } from "react";
import "./QuestionPage.css";

const KuisSimplePastTense = () => {
   const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
  
    const questions = [
      {
        question: "She ___ a letter yesterday. (write)",
        options: [
          { label: "A. write", value: "A"},
          { label: "B. wrote", value: "B", isCorrect: true  },
          { label: "C. written", value: "C" },
          { label: "D. writes", value: "D" },
        ],
      },
      {
        question: "I ___ the book on the table. (put)",
        options: [
          { label: "A. puts", value: "A" },
          { label: "B. putting", value: "B" },
          { label: "C. putted", value: "C" },
          { label: "D. put", value: "D" , isCorrect: true },
        ],
      },
      {
        question: "They ___ to the cinema last night. (go)",
        options: [
          { label: "A. went", value: "A",isCorrect: true },
          { label: "B. go", value: "B"},
          { label: "C. going", value: "C" },
          { label: "D. gone", value: "D" },
        ],
      },
      {
        question: "He ___ his homework last night. (do)",
        options: [
          { label: "A. done", value: "A"},
          { label: "B. doing", value: "B" },
          { label: "C. does", value: "C" },
          { label: "D. did", value: "D", isCorrect: true },
        ],
      },
      {
        question: "We ___ a great time at the party. (have)",
        options: [
          { label: "A. had", value: "A" },
          { label: "B. haved", value: "B" },
          { label: "C. have", value: "C" , isCorrect: true},
          { label: "D. has", value: "D" },
        ],
      },
      {
        question: "The sun ___ this morning. (rise)",
        options: [
          { label: "A. rise", value: "A" },
          { label: "B. rose", value: "B", isCorrect: true },
          { label: "C. risen", value: "C" },
          { label: "D. rises", value: "D" },
        ],
      },
      {
        question: "She ___ a delicious cake. (bake)",
        options: [
          { label: "A. bake", value: "A" },
          { label: "B. bakes", value: "B" },
          { label: "C. baked", value: "C", isCorrect: true },
          { label: "D. baking", value: "D" },
        ],
      },
      {
        question: "He ___ his keys. (lose)",
        options: [
          { label: "A. lose", value: "A" },
          { label: "B. loses", value: "B" },
          { label: "C. lost", value: "C", isCorrect: true },
          { label: "D. losing", value: "D" },
        ],
      },
      {
        question: "We ___ the entire book in one day. (read)",
        options: [
          { label: "A. read", value: "A", isCorrect: true },
          { label: "B. reads", value: "B" },
          { label: "C. reading", value: "C" },
          { label: "D. readed", value: "D" },
        ],
      },
      {
        question: "They ___ home after the party. (go)",
        options: [
          { label: "A. go", value: "A" },
          { label: "B. went", value: "B", isCorrect: true },
          { label: "C. goes", value: "C" },
          { label: "D. going", value: "D" },
        ],
      },
      {
        question: "I ___ a movie last night. (watch)",
        options: [
          { label: "A. watches", value: "A" },
          { label: "B. watched", value: "B", isCorrect: true },
          { label: "C. watching", value: "C" },
          { label: "D. watch", value: "D" },
        ],
      },
      {
        question: "She ___ all the cookies. (eat)",
        options: [
          { label: "A. eats", value: "A" },
          { label: "B. ate", value: "B", isCorrect: true },
          { label: "C. eaten", value: "C" },
          { label: "D. eating", value: "D" },
        ],
      },
      {
        question: "He ___ the car. (wash)",
        options: [
          { label: "A. washes", value: "A" },
          { label: "B. wash", value: "B" },
          { label: "C. washed", value: "C", isCorrect: true },
          { label: "D. washing", value: "D" },
        ],
      },
      {
        question: "We ___ a song together. (sing)",
        options: [
          { label: "A. sings", value: "A" },
          { label: "B. sang", value: "B", isCorrect: true },
          { label: "C. singed", value: "C" },
          { label: "D. sing", value: "D" },
        ],
      },
      {
        question: "They ___ to the store. (drive)",
        options: [
          { label: "A. drives", value: "A" },
          { label: "B. drove", value: "B", isCorrect: true },
          { label: "C. driven", value: "C" },
          { label: "D. driving", value: "D" },
        ],
      },
      {
        question: "I ___ him yesterday. (meet)",
        options: [
          { label: "A. meeted", value: "A" },
          { label: "B. met", value: "B", isCorrect: true },
          { label: "C. meets", value: "C" },
          { label: "D. meeting", value: "D" },
        ],
      },
      {
        question: "She ___ the door. (open)",
        options: [
          { label: "A. opens", value: "A" },
          { label: "B. opening", value: "B" },
          { label: "C. open", value: "C" },
          { label: "D. opened", value: "D", isCorrect: true },
        ],
      },
      {
        question: "He ___ a marathon. (run)",
        options: [
          { label: "A. ran", value: "A", isCorrect: true },
          { label: "B. runs", value: "B" },
          { label: "C. running", value: "C" },
          { label: "D. run", value: "D" },
        ],
      },
      {
        question: "We ___ a new project. (begin)",
        options: [
          { label: "A. begins", value: "A" },
          { label: "B. begin", value: "B" },
          { label: "C. began", value: "C", isCorrect: true },
          { label: "D. begun", value: "D" },
        ],
      },
      {
        question: "They ___ a big present. (buy)",
        options: [
          { label: "A. buys", value: "A" },
          { label: "B. buying", value: "B" },
          { label: "C. bought", value: "C", isCorrect: true },
          { label: "D. buy", value: "D" },
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
            <h1 className="latihan-soal1-title">Kuis Simple Past Tense</h1>
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
          <h1 className="latihan-soal1-title">Latihan Soal Simple Past Tense</h1>
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

export default KuisSimplePastTense;
