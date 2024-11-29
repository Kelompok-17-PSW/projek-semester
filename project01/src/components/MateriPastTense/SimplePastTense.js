import React, {useState, useRef} from "react";
import "../MateriPastTense/PastTense.css";

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
    answer1: "wrote",
    answer2: "gave",
    answer3: "sang",
    answer4: "climbed",
    answer5: "did not snitch",
    answer6: "forgot",
    answer7: "took",
    answer8: "told",
    answer9: "was",
    answer10: "was",
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
          Most verbs in the English language follow the same pattern in how they are conjugated (i.e., how they change form to show time with tense, as well as to show their other properties). These rule-following verbs are called regular verbs. To form the simple past tense of regular verbs, you add -ed to the root form of the verb. If the root form ends in e, you drop that e before adding the -ed:
        </p>
        <div className="table-container">
          <table className="small-table">
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
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>walk</td>
                <td>walked</td>
              </tr>
              <tr>
                <td>clean</td>
                <td>cleaned</td>
              </tr>
              <tr>
                <td>smile</td>
                <td>smiled</td>
              </tr>
              <tr>
                <td>jump</td>
                <td>jumped</td>
              </tr>
              <tr>
                <td>talk</td>
                <td>talked</td>
              </tr>
              <tr>
                <td>call</td>
                <td>called</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '10px' }}>
          Example:<br/>
          -<i>Novsiana <b><i>played</i></b> the guitar at the party.</i><br/>
          -<i>I <b><i>typed</i></b> my search tearm into the search window.</i><br/>
          -<i>Veronika<b> <i>cooked</i></b> a birthday cake at the kitchen</i><br/>
          -<i>My brother<b> <i>called</i></b> her kitty because she's cute</i><br/>
        </p>

        <p><b>2. Forming the simple past tense of irregular verbs</b></p>
        <p style={{ marginTop: '10px' }}>
        Irregular verbs do not follow the simple pattern of adding -ed or -d to their root to form the simple past tense. There are nearly 200 common examples of these verbs in English, and they are conjugated in many different ways. Let’s look at some patterns irregular verbs can follow to form the simple past tense, with example sentences.
        </p>
        <div className="table-container">
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>put</td>
                <td>put</td>
              </tr>
              <tr>
                <td>cut</td>
                <td>cut</td>
              </tr>
              <tr>
                <td>set</td>
                <td>set</td>
              </tr>
              <tr>
                <td>cost</td>
                <td>cost</td>
              </tr>
              <tr>
                <td>hit</td>
                <td>hit</td>
              </tr>
              <tr>
                <td>begin</td>
                <td>began</td>
              </tr>
            </tbody>
          </table>
          <table className="small-table">
            <thead>
              <tr>
                <th>Root</th>
                <th>Simple past tense</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>become</td>
                <td>became</td>
              </tr>
              <tr>
                <td>buy</td>
                <td>bought</td>
              </tr>
              <tr>
                <td>bring</td>
                <td>brought</td>
              </tr>
              <tr>
                <td>catch</td>
                <td>caught</td>
              </tr>
              <tr>
                <td>break</td>
                <td>broke</td>
              </tr>
              <tr>
                <td>do</td>
                <td>did</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '10px' }}>
          Example:<br/>
          -<i>i just <b><i>put</i></b> that chair there yesterday.</i><br/>
          -<i>Last week, Widya <b><i>went </i></b> to the salon, the owner <b>cut</b> her hair</i><br/>
          -<i>We<b> <i>were</i></b> in collegue together</i><br/>
          -<i>They<b> <i>taught</i></b> in adjacent classroom</i><br/>
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
        <h3>Example</h3>
        <p>(+)My uncle died last year<br/>
        (-)My uncle didn't die last year<br/>
        (?)Did my uncle die last year?<br/>
        </p>

        <p>(+)John arrived in Canberra last friday<br/>
        (-)John didn't arrive in Canberra last friday <br/>
        (?)Did John arrive in Canberra last friday?
        </p>

        <p>(+)I was born in 2006<br/>
        (-)I wasn't born in 2006<br/>
        (?)were you born in 2006?
        </p>

        <p>(+)You were my best buddies <br/>
        (-)You were not my best buddies<br/>
        (?)were you my best buddies?
        </p>

        <p>(+)we cut her hair yesterday at my house<br/>
        (-)we didn't cut her hair yesterday<br/>
        (?)did we cut her hair yesterday?
        </p>
      </div>
    </section>

    <section className="activity-section">
      <h2>Activity</h2>
      <p>
      Rewrite the following sentences using Simple Past Tense.</p>
      <div className="word-list">
        <div className="word-card">
          <h3 className="word-title nailed">Question 1</h3>
          <p className="word-meaning">
          My Mom (write) a letter to Aunt Tina in Japan yesterday. 
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
          Halimah (give) me some stationery as my birthday present this morning.
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
          The children (sing) together in the choir competition last Sunday.
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
          My dad and I (climb) Papandayan Mount together three months ago.
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
          (he speak) politely to his elder brother just now? 
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
          (the girls dance) beautifully on the main stage last night?
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
          The students (not read) the text to discuss yesterday morning.
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
          The movie (begin) at nine o'clock.
          </p>
          <input
            type="text"
            ref={answer8Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title not-visible">Question 9</h3>
          <p className="word-meaning">
          The movie (begin) at nine o'clock.
          </p>
          <input
            type="text"
            ref={answer8Ref}
            placeholder="Your answer"
          />
        </div>

        <div className="word-card">
          <h3 className="word-title not-visible">Question 9</h3>
          <p className="word-meaning">
          She (cook) a delicious meal last Sunday.
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
