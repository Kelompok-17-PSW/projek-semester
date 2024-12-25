import React, { useState } from "react";
import "./QuestionPage.css"; 

const KuisPastContinuousTense = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "She ___ (study) when I called her.",
      options: [
        { label: "A. were studying", value: "A" },
        { label: "B. is studying", value: "B" },
        { label: "C. was studying", value: "C", isCorrect: true },
        { label: "D. studied", value: "D" },
      ],
    },
    {
      question: "They ___ (watch) a movie when the lights went out",
      options: [
        { label: "A. watch", value: "A" },
        { label: "B. watched", value: "B" },
        { label: "C. were watched", value: "C" },
        { label: "D. were watching", value: "D", isCorrect: true },
      ],
    },
    {
      question: "At this time last week, we ___ (eat) dinner.",
      options: [
        { label: "A. were eating", value: "A", isCorrect: true },
        { label: "B. eat", value: "B" },
        { label: "C. are eating", value: "C" },
        { label: "D. ate", value: "D" },
      ],
    },
    {
      question: "I ___ (do) my homework when you arrived",
      options: [
        { label: "A. is doing", value: "A" },
        { label: "B. were doing", value: "B" },
        { label: "C. was doing", value: "C", isCorrect: true },
        { label: "D. did", value: "D" },
      ],
    },
    {
      question: "They ___ (not work) when the boss came in.",
      options: [
        { label: "A. didn't work", value: "A" },
        { label: "B. weren't working", value: "B", isCorrect: true },
        { label: "C. not working", value: "C" },
        { label: "D. didn't work", value: "D" },
      ],
    },
    {
      question: "He ___ (read) a book when I entered the room.",
      options: [
        { label: "A. was reading", value: "A", isCorrect: true },
        { label: "B. reads", value: "B" },
        { label: "C. were reading", value: "C" },
        { label: "D. read", value: "D" },
      ],
    },
    {
      question: "The children ___ (play) in the garden when it started raining.",
      options: [
        { label: "A. were playing", value: "A", isCorrect: true },
        { label: "B. played", value: "B" },
        { label: "C. was playing", value: "C" },
        { label: "D. playing", value: "D" },
      ],
    },
    {
      question: "She ___ (not listen) to music when I called her.",
      options: [
        { label: "A. wasn't listening", value: "A", isCorrect: true },
        { label: "B. weren't listening", value: "B" },
        { label: "C. not listening", value: "C" },
        { label: "D. didn't listen", value: "D" },
      ],
    },
    {
      question: "They ___ (not talk) when the teacher came in.",
      options: [
        { label: "A. weren't talking", value: "A", isCorrect: true },
        { label: "B. not talking", value: "B" },
        { label: "C. didn't talk", value: "C" },
        { label: "D. don't talk", value: "D" },
      ],
    },
    {
      question: "What ___ you ___ (do) when I saw you yesterday?",
      options: [
        { label: "A. were doing", value: "A", isCorrect: true },
        { label: "B. was doing", value: "B" },
        { label: "C. are doing", value: "C" },
        { label: "D. do", value: "D" },
      ],
    },
    {
      question: "We ___ (discuss) the project when he interrupted us.",
      options: [
        { label: "A. were discussing", value: "A", isCorrect: true },
        { label: "B. was discussing", value: "B" },
        { label: "C. discuss", value: "C" },
        { label: "D. discussed", value: "D" },
      ],
    },
    {
      question: "She ___ (not cook) when I entered the kitchen.",
      options: [
        { label: "A. wasn't cooking", value: "A", isCorrect: true },
        { label: "B. not cooking", value: "B" },
        { label: "C. didn't cook", value: "C" },
        { label: "D. doesn't cook", value: "D" },
      ],
    },
    {
      question: "Why ___ he ___ (run) so fast when you saw him?",
      options: [
        { label: "A. was running", value: "A", isCorrect: true },
        { label: "B. were running", value: "B" },
        { label: "C. runs", value: "C" },
        { label: "D. ran", value: "D" },
      ],
    },
    {
      question: "The dog ___ (bark) loudly when I got home.",
      options: [
        { label: "A. was barking", value: "A", isCorrect: true },
        { label: "B. barked", value: "B" },
        { label: "C. were barking", value: "C" },
        { label: "D. barking", value: "D" },
      ],
    },
    {
      question: "I ___ (not sleep) when you called.",
      options: [
        { label: "A. wasn't sleeping", value: "A", isCorrect: true },
        { label: "B. not sleeping", value: "B" },
        { label: "C. didn't sleep", value: "C" },
        { label: "D. don't sleep", value: "D" },
      ],
    },
    {
      question: "The workers ___ (fix) the road when it started raining.",
      options: [
        { label: "A. were fixing", value: "A", isCorrect: true },
        { label: "B. was fixing", value: "B" },
        { label: "C. fixing", value: "C" },
        { label: "D. fixed", value: "D" },
      ],
    },
    {
      question: "She ___ (not take) a shower when the phone rang.",
      options: [
        { label: "A. wasn't taking", value: "A", isCorrect: true },
        { label: "B. didn't take", value: "B" },
        { label: "C. not taking", value: "C" },
        { label: "D. doesn't take", value: "D" },
      ],
    },
    {
      question: "What ___ they ___ (do) when you visited them?",
      options: [
        { label: "A. were doing", value: "A", isCorrect: true },
        { label: "B. are doing", value: "B" },
        { label: "C. did", value: "C" },
        { label: "D. do", value: "D" },
      ],
    },
    {
      question: "The students ___ (not pay) attention when the teacher arrived.",
      options: [
        { label: "A. weren't paying", value: "A", isCorrect: true },
        { label: "B. didn't pay", value: "B" },
        { label: "C. not paying", value: "C" },
        { label: "D. don't pay", value: "D" },
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
          <h1 className="latihan-soal1-title">Latihan Soal Past Continuous Tense</h1>
          <h2>Selesai!</h2>
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
        <h1 className="latihan-soal1-title">Latihan Soal Past Continuous Tense</h1>
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

export default KuisPastContinuousTense;
