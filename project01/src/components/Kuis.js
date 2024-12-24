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
        { title: "Simple Present Tense", link: "/kuis-simple-present" },
        { title: "Present Continuous Tense", link: "/kuis-present-continuous" },
        { title: "Present Perfect Tense", link: "/kuis-present-perfect" },
        { title: "Present Perfect Continuous Tense", link: "/kuis-present-perfect-continuous" },
      ],
    },
    {
      id: "past",
      title: "Past Tense",
      subTenses: [
        { title: "Simple Past Tense", link: "/kuis-simple-past" },
        { title: "Past Continuous Tense", link: "/kuis-past-continuous" },
        { title: "Past Perfect Tense", link: "/kuis-past-perfect" },
        { title: "Past Perfect Continuous Tense", link: "/kuis-past-perfect-continuous" },
      ],
    },
    {
      id: "future",
      title: "Future Tense",
      subTenses: [
        { title: "Simple Future Tense", link: "/kuis-simple-future" },
        { title: "Future Continuous Tense", link: "/kuis-future-continuous" },
        { title: "Future Perfect Tense", link: "/kuis-future-perfect" },
        { title: "Future Perfect Continuous Tense", link: "/kuis-future-perfect-continuous" },
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
      <h1>Siap Mengasah Pemahaman Tenses Anda?</h1>

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
