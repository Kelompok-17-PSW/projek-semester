import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPresentPerfectContinuousTense = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "She ... (study) English for two hours.",
      options: ["A. studies", "B. has studied", "C. has been studying", "D. studied"],
      correctOption: "C",
      explanation: "The correct answer is 'C. has been studying' because the present perfect continuous tense is used to describe an action that started in the past and is still ongoing or has recently stopped.",
    },
    {
      question: "I ... (wait) for the bus for half an hour.",
      options: ["A. wait", "B. have waited", "C. am waiting", "D. have been waiting"],
      correctOption: "D",
      explanation: "The correct answer is 'D. have been waiting' because the present perfect continuous tense is used to describe an action that began in the past and is still continuing or has just finished.",
    },
    {
      question: "They ... (work) on the project all day.",
      options: ["A. have worked", "B. work", "C. have been working", "D. are working"],
      correctOption: "C",
      explanation: "The correct answer is 'C. have been working' because the present perfect continuous tense describes an action that started in the past and is still ongoing or has recently finished with a present relevance.",
    },
    {
      question: "I ... (not, eat) anything today.",
      options: ["A. haven't eaten", "B. haven't been eating", "C. didn't eat", "D. am not eating"],
      correctOption: "B",
      explanation: "The correct answer is 'B. haven't been eating' because the present perfect continuous tense is used for actions that have been happening over a period of time and are not finished.",
    },
    {
      question: "He ... (train) for the marathon for months.",
      options: ["A. has trained", "B. has been training", "C. trained", "D. is training"],
      correctOption: "B",
      explanation: "The correct answer is 'B. has been training' because the present perfect continuous tense is used to describe an action that started in the past and is still continuing.",
    },
    {
      question: "We ... (live) in this house since 2010.",
      options: ["A. have been living", "B. have lived", "C. are living", "D. lived"],
      correctOption: "A",
      explanation: "The correct answer is 'A. have been living' because the present perfect continuous tense emphasizes the duration of an action that began in the past and continues to the present.",
    },
    {
      question: "She ... (read) for hours and now she is tired.",
      options: ["A. has been reading", "B. has read", "C. read", "D. is reading"],
      correctOption: "A",
      explanation: "The correct answer is 'A. has been reading' because the present perfect continuous tense indicates an ongoing action that has recently finished.",
    },
    {
      question: "They ... (work) hard all week.",
      options: ["A. have worked", "B. have been working", "C. are working", "D. worked"],
      correctOption: "B",
      explanation: "The correct answer is 'B. have been working' because the present perfect continuous tense is used to describe an action that has been happening for a period of time up to the present.",
    },
    {
      question: "I ... (try) to call you all morning.",
      options: ["A. have tried", "B. am trying", "C. have been trying", "D. try"],
      correctOption: "C",
      explanation: "The correct answer is 'C. have been trying' because the present perfect continuous tense is used to express an action that has been happening over a period of time and continues or just finished.",
    },
    {
      question: "We ... (wait) for you since 9 o'clock.",
      options: ["A. waited", "B. have been waiting", "C. have waited", "D. are waiting"],
      correctOption: "B",
      explanation: "The correct answer is 'B. have been waiting' because the present perfect continuous tense describes an action that started in the past and continues to the present moment.",
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

export default KuisPresentPerfectContinuousTense;
