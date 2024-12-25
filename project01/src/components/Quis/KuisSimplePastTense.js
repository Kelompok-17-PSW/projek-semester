import React, { useState } from "react";
import "./QuestionPage.css";

const KuisSimplePastTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "She ... (go) to the market yesterday.",
      options: ["A. go", "B. goes", "C. went", "D. gone"],
      correctOption: "C",
      explanation: "The correct answer is 'C. went' because 'went' is the past tense of 'go'.",
    },
    {
      question: "I ... (see) a movie last night.",
      options: ["A. saw", "B. see", "C. seeing", "D. seen"],
      correctOption: "A",
      explanation: "The correct answer is 'A. saw' because 'saw' is the simple past form of 'see'.",
    },
    {
      question: "They ... (play) football in the park.",
      options: ["A. plays", "B. played", "C. playing", "D. play"],
      correctOption: "B",
      explanation: "The correct answer is 'B. played' because it is the simple past form of 'play'.",
    },
    {
      question: "We ... (eat) pizza at the party.",
      options: ["A. ate", "B. eat", "C. eaten", "D. eating"],
      correctOption: "A",
      explanation: "The correct answer is 'A. ate' because 'ate' is the past form of 'eat'.",
    },
    {
      question: "He ... (write) a letter to his friend.",
      options: ["A. wrote", "B. writes", "C. writing", "D. write"],
      correctOption: "A",
      explanation: "The correct answer is 'A. wrote' because 'wrote' is the past tense of 'write'.",
    },
    {
      question: "I ... (sleep) late last night.",
      options: ["A. slept", "B. sleep", "C. sleeping", "D. sleeps"],
      correctOption: "A",
      explanation: "The correct answer is 'A. slept' because 'slept' is the past form of 'sleep'.",
    },
    {
      question: "She ... (read) a book yesterday afternoon.",
      options: ["A. read", "B. reads", "C. reading", "D. readed"],
      correctOption: "A",
      explanation: "The correct answer is 'A. read' because 'read' in simple past has the same spelling but different pronunciation.",
    },
    {
      question: "They ... (drink) coffee in the morning.",
      options: ["A. drank", "B. drink", "C. drunk", "D. drinking"],
      correctOption: "A",
      explanation: "The correct answer is 'A. drank' because 'drank' is the past tense of 'drink'.",
    },
    {
      question: "He ... (buy) a new car last week.",
      options: ["A. bought", "B. buys", "C. buyed", "D. buying"],
      correctOption: "A",
      explanation: "The correct answer is 'A. bought' because 'bought' is the past form of 'buy'.",
    },
    {
      question: "I ... (run) 5 kilometers yesterday morning.",
      options: ["A. ran", "B. run", "C. running", "D. runs"],
      correctOption: "A",
      explanation: "The correct answer is 'A. ran' because 'ran' is the past form of 'run'.",
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

export default KuisSimplePastTense;
