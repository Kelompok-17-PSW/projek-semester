import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/latihansoal.css";

const Kuis = () => {
  const navigate = useNavigate();

  const tenseSections = [
    {
      id: "present",
      title: "Present Tense",
      subTenses: [
        { title: "Simple Present Tense", link: "/simple-present-tense" },
        { title: "Present Continuous Tense", link: "/present-continuous-tense" },
        { title: "Present Perfect Tense", link: "/present-perfect-tense" },
        { title: "Present Perfect Continuous Tense", link: "/present-perfect-continuous-tenses" },
      ],
    },
    {
      id: "past",
      title: "Past Tense",
      subTenses: [
        { title: "Simple Past Tense", link: "/simple-past-tense" },
        { title: "Past Continuous Tense", link: "/past-continuous-tense" },
        { title: "Past Perfect Tense", link: "/past-perfect-tense" },
        { title: "Past Perfect Continuous Tense", link: "/past-perfect-continuous-tense" },
      ],
    },
    {
      id: "future",
      title: "Future Tense",
      subTenses: [
        { title: "Simple Future Tense", link: "/simple-future" },
        { title: "Future Continuous Tense", link: "/future-continuous-tense" },
        { title: "Future Perfect Tense", link: "/future-perfect-tense" },
        { title: "Future Perfect Continuous Tense", link: "/future-perfect-continuous" },
      ],
    },
  ];

  return (
    <div className="latihan-soal-container">
      {/* Video Background */}
      <video autoPlay muted loop className="video-background">
        <source src={require("../images/bg.mp4")} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Heading */}
      <h1>Siap untuk belajar tenses?</h1>

      {/* Tense Sections */}
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
