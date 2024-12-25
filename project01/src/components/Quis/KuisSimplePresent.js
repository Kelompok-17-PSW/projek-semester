import React, { useState } from "react";
import "./QuestionPage.css";

const KuisSimplePresentTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "She ... (go) to the market every day.",
      options: ["A. go", "B. goes", "C. going", "D. gone"],
      correctOption: "B",
      explanation: "The correct answer is 'B. goes' because 'goes' is the simple present form of 'go' for the third person singular.",
    },
    {
      question: "I ... (see) a movie every weekend.",
      options: ["A. see", "B. sees", "C. seen", "D. seeing"],
      correctOption: "A",
      explanation: "The correct answer is 'A. see' because 'see' is the base form used with the subject 'I'.",
    },
    {
      question: "They ... (play) football every Saturday.",
      options: ["A. play", "B. plays", "C. played", "D. playing"],
      correctOption: "A",
      explanation: "The correct answer is 'A. play' because 'play' is the base form used for the subject 'they'.",
    },
    {
      question: "We ... (eat) breakfast at 7 AM every day.",
      options: ["A. eats", "B. eat", "C. eaten", "D. eating"],
      correctOption: "B",
      explanation: "The correct answer is 'B. eat' because 'eat' is used in the base form with the subject 'we'.",
    },
    {
      question: "He ... (write) emails every morning.",
      options: ["A. writes", "B. write", "C. written", "D. writing"],
      correctOption: "A",
      explanation: "The correct answer is 'A. writes' because 'writes' is the third person singular form of 'write'.",
    },
    {
      question: "I ... (sleep) early on weekdays.",
      options: ["A. sleep", "B. sleeps", "C. sleeping", "D. slept"],
      correctOption: "A",
      explanation: "The correct answer is 'A. sleep' because 'sleep' is used with the subject 'I'.",
    },
    {
      question: "She ... (read) books every night.",
      options: ["A. read", "B. reads", "C. reading", "D. readed"],
      correctOption: "B",
      explanation: "The correct answer is 'B. reads' because 'reads' is the third person singular form of 'read'.",
    },
    {
      question: "They ... (drink) coffee every morning.",
      options: ["A. drink", "B. drinks", "C. drunk", "D. drinking"],
      correctOption: "A",
      explanation: "The correct answer is 'A. drink' because 'drink' is used for plural subjects like 'they'.",
    },
    {
      question: "He ... (buy) groceries every week.",
      options: ["A. buys", "B. buy", "C. bought", "D. buying"],
      correctOption: "A",
      explanation: "The correct answer is 'A. buys' because 'buys' is the third person singular form of 'buy'.",
    },
    {
      question: "I ... (run) every morning.",
      options: ["A. run", "B. runs", "C. ran", "D. running"],
      correctOption: "A",
      explanation: "The correct answer is 'A. run' because 'run' is the base form used with the subject 'I'.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      resetSelection();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      resetSelection();
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const resetSelection = () => {
    setSelectedOption(null);
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true);
    }
    setShowConfirmation(false);
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Soal Sebelumnya
        </button>
        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Soal Berikutnya &rarr;
        </button>
      </div>

      <div className="interactive-section">
        <div className="dropdown-container">
          <label htmlFor="question-dropdown">Pilih Soal:</label>
          <select
            id="question-dropdown"
            value={currentQuestion}
            onChange={handleDropdownChange}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                Soal {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="options-container">
          {questions[currentQuestion - 1].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedOption === option
                  ? option === questions[currentQuestion - 1].correctOption
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <p>Yakin mau melihat pembahasan sekarang?</p>
            <div className="popup-buttons">
              <button
                className="popup-button no-button"
                onClick={() => handleConfirmationResponse("no")}
              >
                Tidak
              </button>
              <button
                className="popup-button yes-button"
                onClick={() => handleConfirmationResponse("yes")}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KuisSimplePresentTense;
