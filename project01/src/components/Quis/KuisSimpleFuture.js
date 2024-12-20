import React, { useState} from "react";
import "../Quis/KuisSimplePast.css"; 

function KuisSimpleFuture() {
   const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "I ecpect, they ... me this evening. (phone)",
      options: [
        { label: "A. Will not phone", value: "A"},
        { label: "B. Will phone", value: "B", isCorrect: true  },
        { label: "C. Would phone", value: "C" },
        { label: "D. Are no phone", value: "D" },
      ],
      explanation:
        "Membran sel berfungsi sebagai penghalang yang mengatur pergerakan zat-zat ke dalam dan keluar dari sel.",
    },
    {
      question: "Don't touch this palte, if you touch it, you ... yourself. (burn)",
      options: [
        { label: "A. Will not be burn", value: "A" },
        { label: "B. Will not burn", value: "B" },
        { label: "C. Will be burn", value: "C" },
        { label: "D. Will burn", value: "D" , isCorrect: true },
      ],
      explanation:
        "Sel-sel spermatzoa diproduksi di dalam tubulus seminiferus testis dan kemudian dipindahkan ke epididymis untuk proses pematangan.",
    },
    {
      question: "We ... house next month. (make)",
      options: [
        { label: "A. Will not make", value: "A"},
        { label: "B. Will make", value: "B", isCorrect: true  },
        { label: "C. is making", value: "C" },
        { label: "D. Would made", value: "D" },
      ],
      explanation:
        "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang identik dengan sel induknya. Mitosis terdiri dari beberapa tahap yaitu profase, metafase, anafase, dan telofase.",
    },
    {
      question: "My sister ... not ... to the concert tonight.(go)",
      options: [
        { label: "A. Will/go", value: "A", isCorrect: true },
        { label: "B. Will/going", value: "B" },
        { label: "C. Did/go", value: "C" },
        { label: "D. Do/go", value: "D" },
      ],
      explanation:
        "Mitokondria berfungsi sebagai 'pembangkit tenaga' sel, memproduksi ATP melalui respirasi sel. Tanpa mitokondria yang berfungsi dengan baik, sel tidak dapat menghasilkan energi yang diperlukan untuk aktivitas metabolisme, yang akhirnya akan mempengaruhi kelangsungan hidup sel dan organisme secara keseluruhan.",
    },
    {
      question: "... i help you to take dinner?",
      options: [
        { label: "A. Is", value: "A" },
        { label: "B. Am", value: "B" },
        { label: "C. Shall", value: "C" , isCorrect: true},
        { label: "D. Are", value: "D" },
      ],
      explanation:
        "Meiosis menghasilkan sel-sel germinal (sel telur dan sperma) dengan jumlah kromosom setengah dari sel induknya, yang memungkinkan terjadinya rekombinasi genetik dan memastikan variasi genetik pada keturunan. Proses ini penting untuk mempertahankan keanekaragaman genetik dalam populasi.",
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
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
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
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
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
            <p>{currentQuestion.explanation}</p>
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

export default KuisSimpleFuture;
