import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Home.css';

const Tips = () => {
  return (
    <Container className="tips-page mt-5">
      <h2 className="section-title">Tips & Tricks for Mastering English</h2>
      <Row>
        <Col md={4}>
          <Card className="tip-card">
            <Card.Body>
              <Card.Title>Listening Tips</Card.Title>
              <Card.Text>
                - Watch English movies and TV shows.<br />
                - Listen to English podcasts or audiobooks.<br />
                - Practice with listening exercises and quizzes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="tip-card">
            <Card.Body>
              <Card.Title>Writing Tips</Card.Title>
              <Card.Text>
                - Practice writing essays and get feedback.<br />
                - Read widely to improve your vocabulary.<br />
                - Keep a journal in English.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="tip-card">
            <Card.Body>
              <Card.Title>Speaking Tips</Card.Title>
              <Card.Text>
                - Practice speaking with friends or language partners.<br />
                - Record yourself and listen to improve pronunciation.<br />
                - Join English speaking clubs or online groups.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Tips;
