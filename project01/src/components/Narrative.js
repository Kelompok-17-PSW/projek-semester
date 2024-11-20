import React from "react";
import "../css/Narrative.css";

const Narrative = () => {
  return (
    <div className="container">
      <header className="header">
        <h2>Narrative Text: The Story of a Friendly Future</h2>
      </header>

      <section className="section info-section">
        <div className="icon">💡</div>
        <div className="content">
          <h3>Did You Know?</h3>
          <p>
            A narrative text is a type of text that tells a story or describes a sequence of events. 
            The purpose of a narrative text is to entertain or inform the reader by presenting events 
            in a coherent and engaging way.
          </p>
        </div>
      </section>

      <section className="section characteristics">
        <div className="icon">🎧</div>
        <div className="content">
          <h3>Characteristics</h3>
          <p><strong>1. Using Past Tenses</strong></p>
          <p>Narrative texts often contain past tenses because they typically recount events that have already occurred. 
            This creates a sense of time and sequence, making it easier for readers to follow the plot and understand the events.</p>
          <blockquote>
            "Once upon a time, in a small village, there lived a kind, generous old man. One day, he stumbled upon a giant squash."
          </blockquote>
          <p><strong>2. Using Adverbials of Time</strong></p>
          <p>Adverbials of time help create a clear structure and progression, guiding the reader through the events.</p>
          <blockquote>
            "Early one morning, Sarah went for a jog in the park. Later that day, she met her friends for lunch."
          </blockquote>
          <p><strong>3. Using Adjectives</strong></p>
          <p>Adjectives make the story vivid and descriptive, giving more information about the nouns in the narrative.</p>
          <blockquote>
            "The brave knight entered the dark, mysterious forest."
          </blockquote>
          <p><strong>4. Using Noun Phrases</strong></p>
          <p>Noun phrases provide rich detail and allow for concise descriptions that help create vivid imagery in the story.</p>
          <blockquote>
            "The bright morning sun cast a golden glow over the calm waters of the lake."
          </blockquote>
        </div>
      </section>

      <section className="section structure">
        <div className="icon">💬</div>
        <div className="content">
          <h3>Structure</h3>
          <p><strong>1. Orientation:</strong> This sets the stage for the story, answering “who,” “where,” and “when.”</p>
          <p><strong>2. Complication:</strong> The main problem or conflict is introduced, including the rising action, climax, and falling action.</p>
          <p><strong>3. Resolution:</strong> The conflict is resolved, and closure is provided for the reader.</p>
          <p><strong>4. Re-orientation / Evaluation:</strong> This optional component reflects on the story and its lesson.</p>
        </div>
      </section>

      <section className="activity-container">
        <h2>Activity</h2>
        <p>
          Now it’s your turn to do a role play with your partners. Create your own short dialogue about the best way to conserve energy based on the clues.
        </p>
        <div className="situations">
          <div className="situation-card">
            <h3>Situation 1</h3>
            <p>
              Student A meets Student B in front of a shopping center. They plan to go to a bookstore on the second floor. 
              Student A wants to use the elevator, while Student B prefers to use the stairs instead.
            </p>
          </div>
          <div className="situation-card">
            <h3>Situation 2</h3>
            <p>
              Student A uses a pencil for their assignment, while Student B uses a mechanical pencil to save trees and conserve energy.
            </p>
          </div>
          <div className="situation-card">
            <h3>Situation 3</h3>
            <p>
              Student A usually uses their motorbike to school, while Student B prefers cycling to reduce pollution and conserve energy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Narrative;
