import React, { useState} from "react";
import "./KuisSimpleFuture.css";

function KuisFutureContinuous() {
  // Data pertanyaan dan pilihan jawaban
  const questions = [
    {
      question: "In a few minutes, she ... (give) her presentation to the team.",
      options: ["will give", "will be giving", "is giving", "gives"],
      correctAnswer: "will be giving",
    },
    {
      question: " Tomorrow at noon, I ... (meet) my friends at the park.",
      options: ["will meet", "am meeting", "meet", "will be meeting"],
      correctAnswer: "will be meeting",
    },
    {
      question: "They ... help us with the project next week.",
      options: ["shall", "will", "would", " are"],
      correctAnswer: "shall",
    },
    {
      question: " ...  you be attending the seminar next week?",
      options: ["Will", "Shall", "Do", "Are"],
      correctAnswer: "Shall",
    },
    {
      question: "... I be able to finish the report by tomorrow?",
      options: ["Can", "Do", "Shall", "Will"],
      correctAnswer: "Will",
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
    window.location.href = '/bab4';  
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

export default KuisFutureContinuous;
