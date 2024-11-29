import React, {useState, useRef} from "react";

const SimplePast = () => {
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();
  const answer4Ref = useRef();
  const answer5Ref = useRef();
  const answer6Ref = useRef();
  const answer7Ref = useRef();
  const answer8Ref = useRef();

  // Jawaban yang benar
  const correctAnswers = {
    answer1: "Arrived",
    answer2: "Won",
    answer3: "Continued",
    answer4: "Was here",
    answer5: "did not snitch",
    answer6: "forgot",
    answer7: "took",
    answer8: "told",
  };

  // Menyimpan hasil pengecekan jawaban
  const [feedback, setFeedback] = useState([]);

  // Fungsi untuk memeriksa jawaban
  const handleSubmit = () => {
    const answers = {
      answer1: answer1Ref.current.value.trim(),
      answer2: answer2Ref.current.value.trim(),
      answer3: answer3Ref.current.value.trim(),
      answer4: answer4Ref.current.value.trim(),
      answer5: answer5Ref.current.value.trim(),
      answer6: answer6Ref.current.value.trim(),
      answer7: answer7Ref.current.value.trim(),
      answer8: answer8Ref.current.value.trim(),
    };

    const newFeedback = [];

    // Memeriksa setiap jawaban
    for (let key in answers) {
      if (answers[key].toLowerCase() === correctAnswers[key].toLowerCase()) {
        newFeedback.push(`${key}: Correct`);
      } else {
        newFeedback.push(`${key}: Incorrect (Correct answer: ${correctAnswers[key]})`);
      }
    }

    setFeedback(newFeedback); // Mengupdate feedback dengan hasil pemeriksaan
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Simple Past Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is the Simple Past Tense?</h3>
          <p>
          The simple past tense is a verb tense used to talk about something that happened or existed before the present. It communicates that the action or state of the verb occurred at a specific time in the past and then was completed. That specific time can be implicit or explicit.
          </p>
        </div>
      </section>

      <section className="section info-section">
  <div className="icon">💡</div>
  <div className="content">
    <h3>When to use the simple past tense?</h3>
    <p><b>1. To talk about an act that already happened</b></p>
    <p>The simple past tense usually communicates that the activity described by a verb both began and ended at a definite time in the past:</p>
    <p style={{ marginTop: '10px' }}>
      <i>Example: Paulus <b><i>admired</i></b> the way the light <b><i>glinted</i></b> off her medal.</i>
    </p>
    <p style={{ marginTop: '10px' }}>
      It is the marked beginning and ending of the action that makes the simple past different from the past continuous tense, which is used to talk about past events that happened over a period of time or in an ongoing way.
    </p>

    <p><b>2. To talk about a past state of being</b></p>
    <p>You can also use the simple past to talk about a past state of being, such as the way someone felt about something. This is often expressed with the simple past tense of the verb to be and an adjective, a noun, or a prepositional phrase. Here are some examples:</p>
    <p style={{ marginTop: '10px' }}>
      <i>-Paulus <b><i>was</i></b> proud of his achievements in the Mathematics Olympiad.</i><br/>
      <i>-The concert <b><i>was</i></b> the higlight of her week </i><br/>
      <i>-she <b><i>was</i></b> at her best the whole time </i>
    </p>

    <p><b>3. With adverbs and adverb phrases for past time</b></p>
    <p>The simple past tense is frequently used with adverbs and adverbial phrases that modify the verb by identifying specifically when in the past its action occurred. Here are the example:</p>
    <p style={{ marginTop: '10px' }}>
    <i>-The package <b>asrrived yesterday</b></i> <br/>
    <i>-<b>Last moth</b>, Paulus met his childhood friends at his birthday party</i><br/>
    <i>-i last <b>saw</b> Christine <b>in March</b></i>
    </p>
  </div>
</section>

<section className="section info-section">
  <div className="icon">💡</div>
  <div className="content">
    <h3>How to form the simple past tense</h3>
    <p>The correct verb form in the simple past tense varies based on whether it is regular or irregular</p>
    <p><b>1. Forming the simple past tense of regular verbs</b></p>
    <p style={{ marginTop: '10px' }}>
      Most verbs in the English language follow the same pattern in how they are conjugated (i.e., how they change form to show time with tense, as well as to show their other properties). These rule-following verbs are called regular verbs. To form the simple past tense of regular verbs, you add -ed to the root form of the verb. If the root form ends in e, you drop that e before adding the -ed: <br/>
      <table>
        <thead>
          <tr>
            <th>Root</th>
            <th>Simple past tense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>play</td>
            <td>played</td>
          </tr>
          <tr>
            <td>type</td>
            <td>typed</td>
          </tr>
          <tr>
            <td>listen</td>
            <td>listened</td>
          </tr>
          <tr>
            <td>push</td>
            <td>pushed</td>
          </tr>
          <tr>
            <td>love</td>
            <td>loved</td>
          </tr>
          <tr>
            <td>cook</td>
            <td>cooked</td>
          </tr>
        </tbody>
      </table>
    </p>
    <p style={{ marginTop: '10px' }}>
      It is the marked beginning and ending of the action that makes the simple past different from the past continuous tense, which is used to talk about past events that happened over a period of time or in an ongoing way.
    </p>

  </div>
</section>

      <div className="container">
      <h1>Rumus Simple Past Tense</h1>
      <table>
        <thead>
          <tr>
            <th>Pola Kalimat</th>
            <th>Rumus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(+) Affirmative/Positif</td>
            <td>
              Subject + V2 + Object <br />
              Subject + was/were + Complement
            </td>
          </tr>
          <tr>
            <td>(-) Negative/Negatif</td>
            <td>
              Subject + did not + V1 + Object <br />
              Subject + was/were + not + Complement
            </td>
          </tr>
          <tr>
            <td>(?) Interrogative/Tanya</td>
            <td>
              Did + Subject + V1 + Object <br />
              Was/Were + Subject + Complement
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <section className="section characteristics">
      <div className="icon">🎧</div>
      <div className="content">
        <h3>Penggunaan Simple Past Tense</h3>
        <p><strong>1. Menyatakan kejadian di masa lalu</strong></p>
        <p>Untuk bagian ini, Anda dapat menggunakan rumus kalimat positif dengan bentuk past simple. Contoh kalimat:</p>
        <p>She traveled to Japan last year. (Dia bepergian ke Jepang tahun lalu.)</p>
        <p>We watched a movie yesterday. (Kami menonton film kemarin.)</p>
        <p><strong>2. Menyatakan kebiasaan di masa lalu</strong></p>
        <p>Tindakan yang sering dilakukan di masa lalu juga menggunakan simple past tense. Contoh kalimat:</p>
        <p>He always walked to school. (Dia selalu berjalan kaki ke sekolah.)</p>
        <p>They played football every weekend. (Mereka bermain sepak bola setiap akhir pekan.)</p>
        <p><strong>3. Menyatakan keadaan di masa lalu</strong></p>
        <p>Tense ini juga digunakan untuk menyatakan keadaan atau situasi di masa lalu. Contoh:</p>
        <p>She was very happy. (Dia sangat bahagia.)</p>
        <p>The weather was cold. (Cuacanya dingin.)</p>
      </div>
    </section>

    <section className="activity-section">
      <h2>Activity</h2>
      <p>Jawablah pertanyaan berikut sebagai latihan simple past tense.</p>
      <div className="word-list">
        <div className="word-card">
          <h3 className="word-title nailed">Question 1</h3>
          <p className="word-meaning">
          Addy and his brother ___ at 10 o’clock yesterday. We needed to hurry back then. 
          </p>
          <input
            type="text"
            ref={answer1Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title beauty-pageant">Question 2</h3>
          <p className="word-meaning">
          My father thought the prime minister ___ in the last election.
          </p>
          <input
            type="text"
            ref={answer2Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title mind-blowing">Question 3</h3>
          <p className="word-meaning">
          She was a good kid. She ___ her father’s orders. 
          </p>
          <input
            type="text"
            ref={answer3Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title alarmed">Question 4</h3>
          <p className="word-meaning">
          Aaron and his brother were not ___ last month. They flew to Boston and stayed there for several months. 
          </p>
          <input
            type="text"
            ref={answer4Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title recruitment">Question 5</h3>
          <p className="word-meaning">
          I ___ if you told me your little secret. 
          </p>
          <input
            type="text"
            ref={answer5Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title upset">Question 6</h3>
          <p className="word-meaning">
          People ___ about this accident a year ago.
          </p>
          <input
            type="text"
            ref={answer6Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title mean">Question 7</h3>
          <p className="word-meaning">
          The first-year students ___ an additional course last week.
          </p>
          <input
            type="text"
            ref={answer7Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title not-visible">Question 8</h3>
          <p className="word-meaning">
          Stop playing around, or I ___ your mother to punish you.
          </p>
          <input
            type="text"
            ref={answer8Ref}
            placeholder="Your answer"
          />
        </div>

        {/* Tombol submit untuk menampilkan hasil */}
        <button onClick={handleSubmit}>Submit Answers</button>
      </div>

      {/* Menampilkan hasil feedback */}
      <div className="feedback">
        {feedback.length > 0 && (
          <ul>
            {feedback.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
    <p>Ingin lebih banyak latihan? Ayo melatih diri dengan kuis</p>
    <div class="button-container">
      <a href="/kuis" class="styled-button">Quiz</a>
    </div>
  </div>
  );
};

export default SimplePast;
