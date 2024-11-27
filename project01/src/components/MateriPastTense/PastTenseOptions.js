import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/MateriPastTense.css';

const PastTenseOptions = () => {
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
      <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>Past Tense Options</h2>
      <Row>
        <Col md={3}>
          <Card className="text-center mb-4 materi-card">
            <Card.Body>
              <Card.Title>Simple Past Tense</Card.Title>
              <Link to="/simple-past-tense" className="btn btn-primary d-block mb-2">Pelajari</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4 materi-card">
            <Card.Body>
              <Card.Title>Past Continuous Tense</Card.Title>
              <Link to="/past-continuous-tense" className="btn btn-primary d-block mb-2">Pelajari</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4 materi-card">
            <Card.Body>
              <Card.Title>Past Perfect Tense</Card.Title>
              <Link to="/past-perfect-tense" className="btn btn-primary d-block mb-2">Pelajari</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center mb-4 materi-card">
            <Card.Body>
              <Card.Title>Past Perfect Continuous Tense</Card.Title>
              <Link to="/past-perfect-continuous-tense" className="btn btn-primary d-block">Pelajari</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PastTenseOptions;
