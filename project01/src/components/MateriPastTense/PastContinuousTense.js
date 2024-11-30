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
    answer1: "painting",
    answer2: "was getting",
    answer3: "was giving",
    answer4: "were catching",
    answer5: "was wearing",
    answer6: "was watering",
    answer7: "was not confusing",
    answer8: "traveling",
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
        <h2>Past Continuous Tense</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>What is the past continuous tense?</h3>
          <p>
          The past continuous tense shows a continuous action that began in the past. 
          It is the past tense version of the present continuous, which also describes ongoing actions. 
          The present and past continuous are very similar, but the past continuous uses was and were, 
          the past tense of to be.
          </p>
        </div>
      </section>

      <div className="container">
      <h1>Past continuous tense formula</h1>
      <table>
        <thead>
          <tr>
            <th>Sentence patterns</th>
            <th>Formula</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(+) Positive </td>
            <td>
              Subject + (was/were) + Verb. ing + o
            </td>
            <td>- She was studying when i called her<br/>
            - They were still sitting quietly at the end of the meeting.<br/>
            - He was coming to my house</td>
          </tr>
          <tr>
            <td>(-) Negative</td>
            <td>
              Subject + (was/were) + not + verb. ing + o              
            </td>
           <td>- They were not playing football at 5 p.m.<br/>
           - He wasn’t having coffee with me this time yesterday<br/>
           - The people were not waiting
           </td>
          </tr>
          <tr>
            <td>(?) Interrogative</td>
            <td>
              Tobe (was/were) + subject + verb. ing + o
            </td>
            <td>- were you watching TV when i arrived?<br/>
            - Wasn't she working when you saw her? <br/>
            - Were they still waiting for you?</td>
          </tr>
        </tbody>
      </table>
    </div>

    <section className="section info-section">
      <div className="icon">🧾</div>
      <div className="content">
        <h3>Verbs you cannot use in the past continuous tense</h3>
        <p>As we explain in our grammar guide, there is a certain type of verb that cannot be used in any continuous tense, including the past continuous tense. These are called stative verbs, also known as state-of-being verbs or, fittingly, non-continuous verbs.</p>
        <p>Stative verbs are less like actions and more like states or feelings. They describe continual states of mind, such as opinions, needs, or awareness. Some of the most common examples of stative verbs include 
        <i> believe, dislike, hate, involve, know, like, love, need, prefer, realize, seem, understand, want, and there's many more</i></p>
        <p>Because stative verbs are inherently continuous, it sounds odd to put them in a continuous tense. Avoid using the above words in the past continuous—you can use them in the simple past instead.</p>
        <p>Incorrect :<i> I was understanding math class until we started fractions</i> <br></br>
           correct : I <b>understood</b> math class until we started fractions.</p>
      </div>
    </section>

    <section className="section info-section">
      <div className="icon">📖</div>
      <div className="content">
        <h3>5 past continuous tense uses and examples</h3>
        <p><b>1. An action in the past that gets interrupted</b></p>
        <p>One of the most common uses of the past continuous tense shows a past action that was interrupted by another past action.
           These are often complex sentences featuring subordinating conjunctions like <i>when, while, before, after, until, or whenever</i>. <br/>
           Put the action that was interrupted in the past continuous tense and the action that interrupts it in the simple past.</p>
        <p> Examples: <br/>
        <i>-Marta <b>was leaving</b> her apartment when she heard the thunderstorm. <br/>
        -They <b>were sleeping</b> peacefully until the alarm rang. <br/>
        -My parents arrived while I <b>was shopping</b>.</i></p>

        <p><b>2. Ongoing actions at a specified time</b></p>
        <p>When you mention an exact time in the past, use the past continuous tense if the action started before that time and continued afterward.
          If the action begins at the time mentioned, use the simple past instead.</p>
        <p>Examples: <br/>
        <i>-At midnight evryone at the party <b>was</b> still <b>having</b> fun <br/>
        -I <b>was working</b> as a chasier in October <br/>
        -By the age of nine, i<b> was training</b> to be a ninja</i></p>

        <p><b>3. Habitual actions in the past (usually with adverbs like always)</b></p>
        <p>Use the past continuous tense to talk about an action that used to be done frequently in the past but is not done in the present. 
          This form is usually used with adverbs and adverb phrases, specifically ones that suggest the action was done a lot, like <i>all the time, always, constantly, continuously and continually, forever, perpetually, and the entire time</i></p>
        <p>You can also use the main adverbs of frequency (rarely, seldom, sometimes, occasionally, often, frequently, usually).</p>
        <p>Examples:</p>
        <p><i>- As a baby, my brother <b>was always making</b> a mess <br/>
        - My first year college,<b>i was making</b> spelling mistakes <b>all the time</b> <br/>
        - She<b> was forever trying</b> to impress her crush</i></p>

        <p><b>4. Emphasizing how long a past action took</b></p>
        <p>You can also use the past continuous tense to emphasize how long an action took and highlight just how much time was spent doing it. This form usually uses adverb phrases that explain the length of time, such as<i> all morning/afternoon/evening, all day/night, all week, for hours/days/weeks/months/years, and the whole time.</i></p>
        <p>You can also use the main adverbs of frequency (rarely, seldom, sometimes, occasionally, often, frequently, usually).</p>
        <p>Examples:</p>
        <p><i>- The players <b>were training all year</b> for this match.<br/>
        - She<b> was gardening all morning</b> and missed the delivery.<br/>
        - I<b> was trying</b> to complete the final level <b>for hours</b>.</i></p>

        <p><b>5. Setting the background for a story </b></p>
        <p>When telling a story (or writing one), you can use the past continuous tense to “set the scene,” or describe exactly what was happening at the beginning of your story. We use the past continuous tense because these actions were, presumably, already happening before the story began.</p>
        <p>Examples:</p>
        <p><i>- The birds <b>were singing</b>, and the sun <b>was shining</b>. I knew it would be a good day.</i><br/>
        - Everyone at the cafe <b>was enjoying</b> their coffe. Then the stranger appeared.<br/>
        - The city <b>was going about its business without knowing the aliens had arrived</b></p>
      </div>
    </section>

    <section className="activity-section">
      <h2>Activity</h2>
      <p>
      Rewrite the following sentences using past continuous tense.</p>
      <div className="word-list">
        <div className="word-card">
          <h3 className="word-title nailed">Question 1</h3>
          <p className="word-meaning">
          Were you … this picture at 8 o’clock yesterday?  (paint)
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
          This morning, Yesterday, The rain … Harder and harder. (get)
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
          My mother …This fruit to Farikha at eight o’clock last night. (give)
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
          We … the chicken in front of the bridge at seven o’clock last night. (catch)
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
          At this time last month, Farida … new clothes for this meeting. (wear)
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
          Reza Pahlevi … this flower at 7 o’clock yesterday. (water)
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
          My teacher taught me this formula yesterday, but Jane  … to understand it. He couldn’t use it. (confuse)
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
          were they... to the USA at this time last week? (travel)
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
