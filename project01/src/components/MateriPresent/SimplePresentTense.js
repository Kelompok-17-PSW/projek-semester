import React from "react";

const SimplePresentTense = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#6200ea" }}>Simple Present Tense</h1>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>What is Simple Present Tense?</h2>
        <p>
          The Simple Present Tense is used to describe actions that are 
          habitual, facts, or general truths. It is one of the most basic tenses in English grammar.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>Formula</h2>
        <ul>
          <li><strong>Positive:</strong> Subject + Verb (Base Form) + Object</li>
          <li><strong>Negative:</strong> Subject + Do/Does + Not + Verb (Base Form) + Object</li>
          <li><strong>Question:</strong> Do/Does + Subject + Verb (Base Form) + Object?</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Examples</h2>
        <ul>
          <li>He <strong>plays</strong> football every day. (Positive)</li>
          <li>She <strong>does not like</strong> coffee. (Negative)</li>
          <li><strong>Do</strong> they <strong>work</strong> on weekends? (Question)</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Practice Exercise</h2>
        <p>
          Fill in the blanks with the correct form of the verb in parentheses:
        </p>
        <ol>
          <li>She __________ (walk) to school every day.</li>
          <li>They __________ (not/play) basketball on weekdays.</li>
          <li>__________ you __________ (like) ice cream?</li>
        </ol>
      </section>

      <footer style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "10px" }}>
        <p style={{ color: "#555" }}>Learn more about tenses on our website!</p>
      </footer>
    </div>
  );
};

export default SimplePresentTense;
