import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Informasi = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Informasi</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Pengumuman</Card.Title>
              <Card.Text>Pengumuman penting tentang jadwal pelajaran dan kuis.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Event</Card.Title>
              <Card.Text>Informasi tentang event atau kegiatan yang akan datang.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Tips Belajar</Card.Title>
              <Card.Text>Tips dan trik untuk meningkatkan kemampuan bahasa Inggrismu.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Informasi;
