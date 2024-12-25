import React, { useState } from "react";
import "./QuestionPage.css";

const KuisPastPerfectContinuous = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      question:
        "She ... (work) at the company for five years when she decided to quit.",
      options: [
        "A. had been working",
        "B. worked",
        "C. had worked",
        "D. works",
      ],
      correctOption: "A",
      explanation:
        "The correct answer is 'A. had been working' because it indicates a continuous action that was ongoing before another past event.",
    },
    {
      question:
        "They ... (wait) for over an hour when the train finally arrived.",
      options: [
        "A. waited",
        "B. had been waiting",
        "C. were waiting",
        "D. wait",
      ],
      correctOption: "B",
      explanation:
        "The correct answer is 'B. had been waiting' as it describes a continuous action before another past event.",
    },
    {
      question:
        "By the time we reached the venue, the band ... (play) for thirty minutes.",
      options: [
        "A. played",
        "B. had been playing",
        "C. had played",
        "D. plays",
      ],
      correctOption: "B",
      explanation:
        "The correct answer is 'B. had been playing' because it shows a continuous action in progress before a specific past time.",
    },
    {
      question:
        "He ... (study) for hours before the exam started.",
      options: [
        "A. studied",
        "B. had studied",
        "C. had been studying",
        "D. studies",
      ],
      correctOption: "C",
      explanation:
        "The correct answer is 'C. had been studying' as it indicates ongoing preparation before a specific moment in the past.",
    },
    {
      question:
        "We ... (drive) for several hours when we finally saw the hotel.",
      options: [
        "A. had been driving",
        "B. drove",
        "C. had driven",
        "D. drive",
      ],
      correctOption: "A",
      explanation:
        "The correct answer is 'A. had been driving' because it describes a long ongoing action before arriving.",
    },
    {
      question:
        "She ... (not sleep) well for weeks before she went to the doctor.",
      options: [
        "A. doesn’t sleep",
        "B. hadn’t been sleeping",
        "C. hasn’t been sleeping",
        "D. hadn’t slept",
      ],
      correctOption: "B",
      explanation:
        "The correct answer is 'B. hadn’t been sleeping' as it refers to a continuous action before another past action.",
    },
    {
      question:
        "He ... (exercise) regularly before he injured his knee.",
      options: [
        "A. exercised",
        "B. had exercised",
        "C. had been exercising",
        "D. exercises",
      ],
      correctOption: "C",
      explanation:
        "The correct answer is 'C. had been exercising' because it shows a continuous habit interrupted by another event.",
    },
    {
      question:
        "They ... (argue) for hours before they reached an agreement.",
      options: [
        "A. had argued",
        "B. argued",
        "C. had been arguing",
        "D. argue",
      ],
      correctOption: "C",
      explanation:
        "The correct answer is 'C. had been arguing' as it indicates a continuous action before the resolution.",
    },
    {
      question:
        "We ... (travel) for days when we finally found a place to stay.",
      options: [
        "A. traveled",
        "B. had been traveling",
        "C. had traveled",
        "D. travel",
      ],
      correctOption: "B",
      explanation:
        "The correct answer is 'B. had been traveling' because it describes a prolonged action before another past event.",
    },
    {
      question:
        "She ... (write) her novel for months before she finished the final chapter.",
      options: [
        "A. had been writing",
        "B. wrote",
        "C. had written",
        "D. writes",
      ],
      correctOption: "A",
      explanation:
        "The correct answer is 'A. had been writing' as it describes a long ongoing action before its conclusion.",
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
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


export default KuisPastPerfectContinuous;
