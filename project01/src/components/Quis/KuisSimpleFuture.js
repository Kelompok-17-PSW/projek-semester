import React, { useState} from "react";
import "../Quis/KuisSimplePast.css"; 

function KuisSimpleFuture() {
  // Data pertanyaan dan pilihan jawaban
  const questions = [
    {
      question: "I expect, they ... me this evening.(phone)",
      options: ["Will not phone", "Will phone", "Would phone", "Are not phone"],
      correctAnswer: "Will phone",
    },
    {
      question: "Don’t touch this plate, IF you touch it, you ... yourself. (burn)",
      options: ["will not be burn", " Will not burn", "will be burn", "Will burn"],
      correctAnswer: "Will burn",
    },
    {
      question: "We ... house next month. (make)",
      options: ["Will not make", "Will make", "is making", " would made"],
      correctAnswer: "Will make",
    },
    {
      question: " My sister ... not ... to the concert tonight.",
      options: ["Will/go", " Will/going", "Did/go", "Do/go"],
      correctAnswer: "Will/go",
    },
    {
      question: " ... i help you to take dinner?",
      options: ["is", "Am", "Shall", "Are"],
      correctAnswer: "Shall",
    },
  ];

  // State untuk menyimpan indeks soal yang sedang ditampilkan
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // State untuk menyimpan jumlah skor benar dan salah
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // State untuk menyimpan status apakah kuis selesai
  const [quizFinished, setQuizFinished] = useState(false);

  // Fungsi untuk menangani pilihan jawaban
  const handleAnswer = (selectedAnswer) => {
    // Cek apakah jawaban benar atau salah
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    // Pindah ke soal berikutnya setelah memberikan jawaban
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Jika sudah selesai
      setQuizFinished(true);
    }
  };

  // Fungsi untuk mengulang kuis
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setQuizFinished(false);
  };

  const goToMenu = () => {
    window.location.href = '/bab2';  
  };

  if (quizFinished) {
    // Tampilan akhir kuis
    return (
      <div className="quiz-finish-container">
        <h1>😊 Good Job</h1>
        <ul className="result-list">
          <li>Pelajaran Ke : 1</li>
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

  // Ambil soal dan pilihan jawaban yang sesuai dengan indeks saat ini
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
}

export default KuisSimpleFuture;
