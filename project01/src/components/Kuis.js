import React, { useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const Kuis = () => {
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
            Kuis
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
                <span>Present Tense</span> {openSection === "present" ? "▲" : "▼"}
              </Card.Title>
              <Card.Text>Klik untuk melihat berbagai macam Present tense.</Card.Text>
              <Collapse in={openSection === "present"}>
                <div id="present-collapse">
                  <Link to="/kuis-simple-present" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Simple Present Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Simple Present Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-present-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Present Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Present Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-present-perfect" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Present Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Present Perfect Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-present-perfect-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Present Perfect Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Present Perfect Continuous Tense.</Card.Text>
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
                  <Link to="/kuis-simple-past" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Simple Past Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Simple Past Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-past-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Past Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Past Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-past-perfect" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Past Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Past Perfect Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-past-perfect-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Past Perfect Continuous Tense</Card.Title>
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
                  <Link to="/kuis-simple-future" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Simple Future Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Simple Future Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-future-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Future Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Future Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-future-perfect" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Future Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Future Perfect Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/kuis-future-perfect-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Future Perfect Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Future Perfect Continuous Tense.</Card.Text>
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

export default Kuis;
