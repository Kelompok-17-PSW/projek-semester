import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPastPerfect = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "By the time I arrived, they ... (finish) their dinner.",
      options: ["A. had finished", "B. finished", "C. were finishing", "D. finish"],
      correctOption: "A",
      explanation: "The correct answer is 'A. had finished' because it indicates a completed action before another past event.",
    },
    {
      question: "She ... (study) English before she moved to Canada.",
      options: ["A. studies", "B. had studied", "C. studied", "D. was studying"],
      correctOption: "B",
      explanation: "The correct answer is 'B. had studied' as it describes an action completed before another past action.",
    },
    {
      question: "They ... (leave) the party before I got there.",
      options: ["A. leave", "B. were leaving", "C. had left", "D. left"],
      correctOption: "C",
      explanation: "The correct answer is 'C. had left' because it shows an action completed before another action in the past.",
    },
    {
      question: "He ... (not finish) his homework when the teacher asked for it.",
      options: ["A. didn’t finish", "B. hadn’t finished", "C. wasn’t finishing", "D. hasn’t finished"],
      correctOption: "B",
      explanation: "The correct answer is 'B. hadn’t finished' as it refers to an incomplete action before a past moment.",
    },
    {
      question: "We ... (know) each other for years before we met in person.",
      options: ["A. had known", "B. knew", "C. were knowing", "D. know"],
      correctOption: "A",
      explanation: "The correct answer is 'A. had known' because it describes a condition that was true up to a certain past time.",
    },
    {
      question: "She ... (write) several novels before she got published.",
      options: ["A. had written", "B. writes", "C. wrote", "D. was writing"],
      correctOption: "A",
      explanation: "The correct answer is 'A. had written' as it shows an action completed before another past event.",
    },
    {
      question: "The train ... (already leave) when we arrived at the station.",
      options: ["A. already leaves", "B. had already left", "C. was already leaving", "D. already left"],
      correctOption: "B",
      explanation: "The correct answer is 'B. had already left' because it describes a completed action before a past moment.",
    },
    {
      question: "He ... (not decide) what to do before the deadline passed.",
      options: ["A. hasn’t decided", "B. hadn’t decided", "C. doesn’t decide", "D. didn’t decide"],
      correctOption: "B",
      explanation: "The correct answer is 'B. hadn’t decided' as it refers to an incomplete action before a past deadline.",
    },
    {
      question: "By the time the movie ended, I ... (fall) asleep.",
      options: ["A. fall", "B. had fallen", "C. was falling", "D. fell"],
      correctOption: "B",
      explanation: "The correct answer is 'B. had fallen' because it indicates a completed action before another past event.",
    },
    {
      question: "We ... (eat) lunch before we went to the museum.",
      options: ["A. ate", "B. were eating", "C. had eaten", "D. eat"],
      correctOption: "C",
      explanation: "The correct answer is 'C. had eaten' as it describes an action completed before another past action.",
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
    </div>
  );
};

export default KuisPastPerfect;
