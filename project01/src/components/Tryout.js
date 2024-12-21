import React, { useState } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const Kuis = () => {
  const [openSection, setOpenSection] = useState(null); 

  const toggleSection = (section) => {
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
            TRYOUT
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
              <Card.Text>Klik untuk melihat tryout Present tense.</Card.Text>
              <Collapse in={openSection === "present"}>
                <div id="present-collapse">
                  <Link to="/tryoutpresent" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                      <Card.Body>
                        <Card.Title>Tryout 1</Card.Title>
                        <Card.Text>Ayo kita ukur kemampuanmu di Present Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

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
              <Card.Text>Klik untuk melihat tryout Past tense.</Card.Text>
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
                        <Card.Title>Tryout 1</Card.Title>
                        <Card.Text>Ayo kita ukur kemampuanmu di Simple Past Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              </Collapse>
            </Card.Body>
          </Card>

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
              <Card.Text>Klik untuk melihat tryout Future tense.</Card.Text>
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
                        <Card.Title>Tryout 1</Card.Title>
                        <Card.Text>Ayo kita ukur kemampuanmu di Simple Future Tense.</Card.Text>
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
