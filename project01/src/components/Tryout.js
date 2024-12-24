import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/tryout.css";

const Kuis = () => {
  const navigate = useNavigate();

  const tenseSections = [
    {
      id: "present",
      title: "Try Out",
      subTenses: [
        { title: "Simple Present Tense", link: "/topresent" },
        { title: "Simple Past Tense", link: "/topast" },
        { title: "Future Tense", link: "/topresent" },
      ],
    }
  ];

  return (
    <div className="latihan-soal-container">
      <video autoPlay muted loop className="video-background">
        <source src={require("../images/bg.mp4")} type="video/mp4" />
      </video>

      <div className="overlay"></div>


      <h1>Siap untuk menguji kemampuanmu dalam memahami Tenses?</h1>

      {tenseSections.map((section) => (
        <div key={section.id} className="tense-section">
          <h2>{section.title}</h2>
          <div className="card-row">
            {section.subTenses.map((subTense, index) => (
              <div key={index} className="tense-card">
                <h3>{subTense.title}</h3>
                <p>{subTense.description}</p>
                <button onClick={() => navigate(subTense.link)}>Mulai Latihan</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kuis;
