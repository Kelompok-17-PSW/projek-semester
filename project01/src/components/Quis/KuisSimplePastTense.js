import React, { useState } from "react";
import "../Quis/KuisSimplePast.css"; 

const KuisSimplePastTense = () => {
  const questions = [
    {
      question: "She ___ a letter yesterday. (write)",
      answer: "wrote",
    },
    {
      question: "They ___ to the cinema last night. (go)",
      answer: "went",
    },
    {
      question: "I ___ the book on the table. (put)",
      answer: "put",
    },
    {
      question: "He ___ his homework last night. (do)",
      answer: "did",
    },
    {
      question: "We ___ a great time at the party. (have)",
      answer: "had",
    },
    {
      question: "You ___ the movie already. (see)",
      answer: "saw",
    },
    {
      question: "She ___ a new car last week. (buy)",
      answer: "bought",
    },
    {
      question: "They ___ the marathon. (run)",
      answer: "ran",
    },
    {
      question: "I ___ breakfast early this morning. (eat)",
      answer: "ate",
    },
    {
      question: "He ___ the ball to me. (throw)",
      answer: "threw",
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const newFeedback = questions.map((q, index) => {
      const isCorrect = answers[index].trim().toLowerCase() === q.answer.toLowerCase();
      return {
        isCorrect,
        correctAnswer: q.answer,
      };
    });

    const totalScore = newFeedback.reduce((acc, feedback) => acc + (feedback.isCorrect ? 10 : 0), 0);

    setFeedback(newFeedback);
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h1>Simple Past Tense Quiz</h1>
      {questions.map((q, index) => (
        <div key={index} className={`question-box ${feedback[index]?.isCorrect === false ? "incorrect" : ""}`}>
          <h4>{q.question}</h4>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className={feedback[index]?.isCorrect === false ? "input-incorrect" : ""}
          />
          {submitted && (
            <p className="feedback">
              {feedback[index].isCorrect ? "Correct!" : `Incorrect, the correct answer is "${feedback[index].correctAnswer}"`}
            </p>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">
        Submit Answers
      </button>
      {submitted && (
        <div className="result-section">
          <h3>Your Score: {score} / {questions.length * 10}</h3>
        </div>
      )}
    </div>
  );
};

export default KuisSimplePastTense;
