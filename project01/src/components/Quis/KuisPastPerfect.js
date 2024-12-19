import React, { useState } from "react";
import "../Quis/KuisSimplePast.css";

const KuisPastPerfectTense = () => {
  const originalQuestions = [
    {
      question: "By the time I arrived, they ___ (finish) the meeting.",
      options: ["had finished", "finished", "have finished", "was finishing"],
      correctAnswer: "had finished",
    },
    {
      question: "She ___ (leave) before I could speak to her.",
      options: ["had left", "left", "have left", "was leaving"],
      correctAnswer: "had left",
    },
    {
      question: "By the time we got to the station, the train ___ (depart).",
      options: ["had departed", "departed", "have departed", "was departing"],
      correctAnswer: "had departed",
    },
    {
      question: "I ___ (never, see) such a beautiful sunset before.",
      options: ["had never seen", "never saw", "have never seen", "was never seeing"],
      correctAnswer: "had never seen",
    },
    {
      question: "She ___ (already, finish) her homework when I called her.",
      options: ["had already finished", "finished already", "has already finished", "was already finishing"],
      correctAnswer: "had already finished",
    },
    {
      question: "They ___ (just, arrive) when the ceremony began.",
      options: ["had just arrived", "arrived just", "have just arrived", "was just arriving"],
      correctAnswer: "had just arrived",
    },
    {
      question: "I ___ (work) for that company for five years before I left.",
      options: ["had worked", "worked", "have worked", "was working"],
      correctAnswer: "had worked",
    },
    {
      question: "By the time the movie started, we ___ (already, eat).",
      options: ["had already eaten", "ate already", "have already eaten", "were already eating"],
      correctAnswer: "had already eaten",
    },
    {
      question: "He ___ (read) the book before he watched the movie.",
      options: ["had read", "read", "has read", "was reading"],
      correctAnswer: "had read",
    },
    {
      question: "We ___ (wait) for over an hour before the bus finally arrived.",
      options: ["had waited", "waited", "have waited", "were waiting"],
      correctAnswer: "had waited",
    },
  ];

  // Fungsi untuk mengacak array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Menyalin dan mengacak opsi dari setiap pertanyaan
  const shuffledQuestions = originalQuestions.map((question) => ({
    ...question,
    options: shuffle([...question.options]),
  }));

  const [questions] = useState(shuffledQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizFinished(false);
  };

  const goToMenu = () => {
    window.location.href = "/bab4";
  };

  if (quizFinished) {
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 3</li>
          <li>Jumlah Soal : {questions.length}</li>
          <li>Jawaban Benar : {correctAnswers}</li>
          <li>Jawaban Salah : {wrongAnswers}</li>
          <li>Nilai : {Math.round((correctAnswers / questions.length) * 100)}</li>
          <li>Keterangan : {correctAnswers / questions.length >= 0.6 ? "Lulus" : "Tidak Lulus"}</li>
        </ul>
        <div className="button-group">
          <button className="restart-button" onClick={restartQuiz}>
            ULANGI
          </button>
          <button className="menu-button" onClick={goToMenu}>
            MENU
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <div className="question-number">No. {currentQuestionIndex + 1}</div>
        <div className="score-container">
          <span className="correct-score">✔ {correctAnswers}</span>
          <span className="wrong-score">✖ {wrongAnswers}</span>
        </div>
      </header>
      <div className="question-box">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="answer-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KuisPastPerfectTense;
