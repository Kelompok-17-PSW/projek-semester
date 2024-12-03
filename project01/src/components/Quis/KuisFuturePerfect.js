import React, { useState} from "react";
import "./KuisSimpleFuture.css";

function KuisFuturePerfect() {
  // Data pertanyaan dan pilihan jawaban
  const questions = [
    {
      question: "Adam ... up all of the foods by the time we come. (eat)",
      options: ["Will has eat", "Will eaten", "Will have eaten", "Will have eat"],
      correctAnswer: "Will have eaten",
    },
    {
      question: " By this time next week, Jennifer ... in Oxford University for 3 years.",
      options: ["Have studied", " Has studied", "Will study", " Will have studied"],
      correctAnswer: " Will have studied",
    },
    {
      question: "... you ... the book by this time next week?",
      options: ["Will, have returned", "Will, be returning", "Will, return", "  Will, have been returning"],
      correctAnswer: "Will, have returned",
    },
    {
      question: " The food ... before the guests come.",
      options: ["Will be prepared", " Is prepared", "Will have been prepared", "Will prepare"],
      correctAnswer: "Will have been prepared",
    },
    {
      question: "The show will start at 8 AM. It ... when you come by 1 PM tomorrow.",
      options: ["Will finish", "Will have finished", "Will be finishing", " Finish"],
      correctAnswer: "Will have finished",
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
    window.location.href = '/bab3';  
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

export default KuisFuturePerfect;
