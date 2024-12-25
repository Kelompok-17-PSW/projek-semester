import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPresentContinuousTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "She ... (go) to the market right now.",
      options: ["A. go", "B. goes", "C. is going", "D. going"],
      correctOption: "C",
      explanation: "The correct answer is 'C. is going' because 'is going' is the present continuous form, used for actions happening right now.",
    },
    {
      question: "I ... (watch) a movie at the moment.",
      options: ["A. watch", "B. watching", "C. is watching", "D. watched"],
      correctOption: "C",
      explanation: "The correct answer is 'C. is watching' because 'is watching' is the present continuous form of 'watch', showing an action happening right now.",
    },
    {
      question: "They ... (play) football at this time.",
      options: ["A. play", "B. plays", "C. are playing", "D. played"],
      correctOption: "C",
      explanation: "The correct answer is 'C. are playing' because 'are playing' is the present continuous form of 'play', describing an action happening at the moment.",
    },
    {
      question: "We ... (eat) dinner now.",
      options: ["A. eat", "B. eating", "C. are eating", "D. eaten"],
      correctOption: "C",
      explanation: "The correct answer is 'C. are eating' because 'are eating' is the present continuous form of 'eat', showing an ongoing action.",
    },
    {
      question: "He ... (write) a letter to his friend right now.",
      options: ["A. writes", "B. writing", "C. is writing", "D. wrote"],
      correctOption: "C",
      explanation: "The correct answer is 'C. is writing' because 'is writing' is the present continuous form, used for an action happening right now.",
    },
    {
      question: "I ... (sleep) at the moment.",
      options: ["A. sleep", "B. sleeps", "C. sleeping", "D. am sleeping"],
      correctOption: "D",
      explanation: "The correct answer is 'D. am sleeping' because 'am sleeping' is the present continuous form, used with the subject 'I'.",
    },
    {
      question: "She ... (read) a book right now.",
      options: ["A. read", "B. reads", "C. is reading", "D. reading"],
      correctOption: "C",
      explanation: "The correct answer is 'C. is reading' because 'is reading' is the present continuous form of 'read', used to describe an ongoing action.",
    },
    {
      question: "They ... (drink) coffee right now.",
      options: ["A. drink", "B. drinks", "C. are drinking", "D. drank"],
      correctOption: "C",
      explanation: "The correct answer is 'C. are drinking' because 'are drinking' is the present continuous form, showing an action happening at the moment.",
    },
    {
      question: "He ... (buy) a new car this week.",
      options: ["A. buys", "B. is buying", "C. buying", "D. bought"],
      correctOption: "B",
      explanation: "The correct answer is 'B. is buying' because 'is buying' is the present continuous form, used for an action happening right now.",
    },
    {
      question: "I ... (run) every morning at 6 AM.",
      options: ["A. run", "B. runs", "C. am running", "D. running"],
      correctOption: "C",
      explanation: "The correct answer is 'C. am running' because 'am running' is the present continuous form, used with 'I' for an ongoing action.",
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

export default KuisPresentContinuousTense;
