import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Materi = () => {
  const cardStyle = {
    cursor: 'pointer', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    borderRadius: '8px', 
    backgroundColor: '#C5D3E8', 
    textDecoration: 'none', 
    display: 'block',
  };

  const hoverStyle = {
    transform: 'scale(1.05)', 
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Materi</h2>

          {}
          <Link to="/bab1" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            >
              <Card.Body>
                <Card.Title>Narrative Text</Card.Title>
                <Card.Text>
                  Pelajari dasar-dasar Narrative text bahasa Inggris untuk pemahaman yang lebih baik.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {}
          <Link to="/vocabulary" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Card.Body>
                <Card.Title>Vocabulary</Card.Title>
                <Card.Text>
                  Perluas kosa kata bahasa Inggrismu dengan latihan vocabulary.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>

          {}
          <Link to="/writing" style={cardStyle}>
            <Card
              className="mb-4"
              style={cardStyle}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Card.Body>
                <Card.Title>Writing</Card.Title>
                <Card.Text>
                  Latihan menulis untuk meningkatkan kemampuan menulis dalam bahasa Inggris.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Materi;
