import React, { useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const Materi = () => {
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
            Materi
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
                  <Link to="/simple-present-tense" style={cardStyle}>
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
                  <Link to="/present-continuous-tense" style={cardStyle}>
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
                  <Link to="/present-perfect-tense" style={cardStyle}>
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
                  <Link to="/present-perfect-continuous-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Present Perfect Continuous Tense</Card.Title>
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
                <Link to="/simple-past-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Simple Past Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Simple Present Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-continuous-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Past Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Present Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-perfect-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Past Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Present Perfect Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-perfect-continuous-tense" style={cardStyle}>
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
                  <Link to="/simple-future" style={cardStyle}>
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
                  <Link to="/future-continuous-tense" style={cardStyle}>
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
                  <Link to="/future-perfect-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Future Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Future Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>

                  <Link to="/future-perfect-continuous" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Future Perfect Continuous Tense</Card.Title>
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

export default Materi;
