import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPresentPerfectTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "She ... (finish) her homework already.",
      options: ["A. finishes", "B. finished", "C. has finished", "D. finish"],
      correctOption: "C",
      explanation: "The correct answer is 'C. has finished' because 'has finished' is the present perfect form, indicating an action that was completed in the past but has relevance to the present.",
    },
    {
      question: "I ... (see) that movie before.",
      options: ["A. saw", "B. seen", "C. have seen", "D. see"],
      correctOption: "C",
      explanation: "The correct answer is 'C. have seen' because 'have seen' is the present perfect form, used to describe an experience that happened at an unspecified time in the past.",
    },
    {
      question: "They ... (eat) lunch already.",
      options: ["A. ate", "B. have eaten", "C. eaten", "D. eats"],
      correctOption: "B",
      explanation: "The correct answer is 'B. have eaten' because 'have eaten' is the present perfect form, used to express an action that was completed in the past but has an effect on the present.",
    },
    {
      question: "We ... (finish) our project.",
      options: ["A. finishes", "B. have finished", "C. finished", "D. finish"],
      correctOption: "B",
      explanation: "The correct answer is 'B. have finished' because 'have finished' is the present perfect form, used to indicate that the action is complete with present relevance.",
    },
    {
      question: "He ... (just, buy) a new phone.",
      options: ["A. has just bought", "B. have just bought", "C. just bought", "D. bought"],
      correctOption: "A",
      explanation: "The correct answer is 'A. has just bought' because 'has just bought' is the present perfect form, used to indicate a recent action.",
    },
    {
      question: "I ... (not, read) that book yet.",
      options: ["A. have not read", "B. did not read", "C. read", "D. has not read"],
      correctOption: "A",
      explanation: "The correct answer is 'A. have not read' because 'have not read' is the present perfect form, used in negative sentences to indicate that an action has not happened up to the present.",
    },
    {
      question: "She ... (live) in this city for five years.",
      options: ["A. lives", "B. is living", "C. has lived", "D. lived"],
      correctOption: "C",
      explanation: "The correct answer is 'C. has lived' because 'has lived' is the present perfect form, used to describe an action that started in the past and continues to the present.",
    },
    {
      question: "They ... (not, finish) their homework yet.",
      options: ["A. have not finished", "B. did not finish", "C. finished", "D. has not finished"],
      correctOption: "A",
      explanation: "The correct answer is 'A. have not finished' because 'have not finished' is the present perfect form, used in negative sentences to describe an unfinished action.",
    },
    {
      question: "He ... (read) that article already.",
      options: ["A. read", "B. has read", "C. have read", "D. reads"],
      correctOption: "B",
      explanation: "The correct answer is 'B. has read' because 'has read' is the present perfect form, used to indicate that an action was completed in the past with relevance to the present.",
    },
    {
      question: "I ... (never, be) to Japan.",
      options: ["A. am never", "B. have never been", "C. was never", "D. never been"],
      correctOption: "B",
      explanation: "The correct answer is 'B. have never been' because 'have never been' is the present perfect form, used to describe an experience that has never happened up to the present.",
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

export default KuisPresentPerfectTense;
