import React, { useState } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Materi = () => {
  const [open, setOpen] = useState(false); 
  const cardStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#C5D3E8',
    textDecoration: 'none',
    display: 'block',
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Materi</h2>

          {/* Card Narrative Text */}
          <Link to="/bab1" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Body>
                <Card.Title>Narrative Text</Card.Title>
                <Card.Text>
                  Pelajari dasar-dasar Narrative text bahasa Inggris untuk pemahaman yang lebih baik.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {/* Card Vocabulary */}
          <Link to="/vocabulary" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Body>
                <Card.Title>Vocabulary</Card.Title>
                <Card.Text>
                  Perluas kosa kata bahasa Inggrismu dengan latihan vocabulary.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {/* Card Writing */}
          <Link to="/writing" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Body>
                <Card.Title>Writing</Card.Title>
                <Card.Text>
                  Latihan menulis untuk meningkatkan kemampuan menulis dalam bahasa Inggris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {/* Card Past Tense dengan Collapse */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title
                onClick={() => setOpen(!open)} 
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{ cursor: 'pointer' }}
              >
                <span className="past-tense-link">Past Tense</span>
              </Card.Title>
              <Card.Text>Klik untuk melihat berbagai macam past tense.</Card.Text>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Link to="/simple-past-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Card.Body>
                        <Card.Title>Simple Past Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Simple Past Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-continuous-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Card.Body>
                        <Card.Title>Past Continuous Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Past Continuous Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-perfect-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                      <Card.Body>
                        <Card.Title>Past Perfect Tense</Card.Title>
                        <Card.Text>Pelajari lebih lanjut tentang Past Perfect Tense.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to="/past-perfect-continuous-tense" style={cardStyle}>
                    <Card
                      className="mb-4"
                      style={cardStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
        </Col>
      </Row>
    </Container>
  );
};

export default Materi;
