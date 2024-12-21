import React, { useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const TO = () => {
  const [openSection, setOpenSection] = useState(null); // State untuk melacak bagian yang terbuka

  const toggleSection = (section) => {
    // Jika bagian yang diklik sudah terbuka, tutup; jika tidak, buka
    setOpenSection(openSection === section ? null : section);
  };

  const cardStyle = {
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#C5D3E8",
    textDecoration: "none",
    display: "block",
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4" style={{ textAlign: "center", fontWeight: "bold" }}>
            Try Out
          </h2>

          {/* Card Present Tense */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title
                onClick={() => toggleSection("present")}
                aria-controls="present-collapse"
                aria-expanded={openSection === "present"}
                style={{ cursor: "pointer" }}
              >
                <span>Present Tense</span>{" "}
                {openSection === "present" ? "▲" : "▼"} {/* Ikon panah */}
              </Card.Title>
              <Card.Text>Klik untuk melihat berbagai macam Present tense.</Card.Text>
              <Collapse in={openSection === "present"}>
                <div id="present-collapse">
                  <Link to="/TOpresent" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Ikuti Try Out</Card.Title>
                        <Card.Text>
                          Pelajari lebih lanjut tentang Present Perfect Continuous Tense.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

          {/* Card Past Tense */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title
                onClick={() => toggleSection("past")}
                aria-controls="past-collapse"
                aria-expanded={openSection === "past"}
                style={{ cursor: "pointer" }}
              >
                <span>Past Tense</span> {openSection === "past" ? "▲" : "▼"}
              </Card.Title>
              <Card.Text>Klik untuk melihat berbagai macam Past tense.</Card.Text>
              <Collapse in={openSection === "past"}>
                <div id="past-collapse">
                <Link to="/topast" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Ikuti Try Out</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Past Perfect Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

          {/* Card Future Tense */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title
                onClick={() => toggleSection("future")}
                aria-controls="future-collapse"
                aria-expanded={openSection === "future"}
                style={{ cursor: "pointer" }}
              >
                <span>Future Tense</span> {openSection === "future" ? "▲" : "▼"}
              </Card.Title>
              <Card.Text>Klik untuk melihat berbagai macam Future tense.</Card.Text>
              <Collapse in={openSection === "future"}>
                <div id="future-collapse">
                  <Link to="/TOfuture" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Try Out Simple Future Tense</Card.Title>
                        <Card.Text>Ikuti Try Out</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/TOfuture-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Ikuti Try Out</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Future Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  
                
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TO;

