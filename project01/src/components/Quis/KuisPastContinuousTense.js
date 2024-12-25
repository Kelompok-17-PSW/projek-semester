import React, { useState} from "react";
import "./QuestionPage.css";

const KuisPastContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "In a few minutes, she ... (give) her presentation to the team.",
      options: ["A. was giving", "B. is giving", "C. were giving", "D. gave"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was giving' because it indicates an action in progress at a specific past time.",
    },
    {
      question: "Yesterday at noon, I ... (meet) my friends at the park.",
      options: ["A. was meeting", "B. met", "C. were meeting", "D. had met"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was meeting' as it refers to an ongoing action at a specific past time.",
    },
    {
      question: "They ... help us with the project last week.",
      options: ["A. were", "B. was", "C. had", "D. did"],
      correctOption: "A",
      explanation: "The correct answer is 'A. were' as it indicates an ongoing action in the past.",
    },
    {
      question: "... you be attending the seminar last week?",
      options: ["A. were", "B. was", "C. did", "D. had"],
      correctOption: "A",
      explanation: "The correct answer is 'A. were' as it is often used in formal questions about past actions.",
    },
    {
      question: "... I be able to finish the report yesterday?",
      options: ["A. could", "B. did", "C. was", "D. were"],
      correctOption: "C",
      explanation: "The correct answer is 'C. was' as it refers to a past ability.",
    },
    {
      question: "This time yesterday, I ______ (travel) to Bali.",
      options: ["A. was traveling", "B. had traveled", "C. were traveling", "D. had been traveling"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was traveling' as it describes an ongoing action in the past.",
    },
    {
      question: "At 7 PM yesterday, they ______ (have) dinner at the restaurant.",
      options: ["A. were having", "B. had had", "C. was having", "D. had been having"],
      correctOption: "A",
      explanation: "The correct answer is 'A. were having' as it describes an ongoing action at a specific time in the past.",
    },
    {
      question: "Last week, she ______ (work) on her new project.",
      options: ["A. was working", "B. had worked", "C. were working", "D. had been working"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was working' as it describes an ongoing action in the past.",
    },
    {
      question: "When you called me, I ______ (watch) a movie.",
      options: ["A. was watching", "B. watched", "C. had watched", "D. had been watching"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was watching' as it refers to an ongoing action in the past.",
    },
    {
      question: "By this time yesterday, he ______ (drive) to his hometown.",
      options: ["A. was driving", "B. drove", "C. had driven", "D. had been driving"],
      correctOption: "A",
      explanation: "The correct answer is 'A. was driving' as it indicates an ongoing action at a specific past time.",
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

export default KuisPastContinuous;
