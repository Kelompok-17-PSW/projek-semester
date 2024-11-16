import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './pages.css';

const Materi = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Materi</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Grammar Dasar</Card.Title>
              <Card.Text>Pelajari dasar-dasar grammar bahasa Inggris untuk pemahaman yang lebih baik.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Vocabulary</Card.Title>
              <Card.Text>Perluas kosa kata bahasa Inggrismu dengan latihan vocabulary.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Writing</Card.Title>
              <Card.Text>Latihan menulis untuk meningkatkan kemampuan menulis dalam bahasa Inggris.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Materi;
