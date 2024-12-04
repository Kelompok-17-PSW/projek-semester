import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Vidio = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Vidio Pembelajaran</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0sKTJV0sjx0?si=bbE6wNMiu5A89y1r" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
              <Card.Body>
                  <Card.Title>Simple Present Tense</Card.Title>
                  <Card.Text>Video ini menjelaskan tentang berbagai jenis tenses 
                    dalam bahasa Inggris.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" src="https://www.youtube.com/embed/VYMfgX3dKz0?si=JMODqTY6VnIy12GF" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Present Continuous Tense</Card.Title>
                  <Card.Text>Video ini membahas tentang phrasal verbs yang penting untuk dipelajari.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/TdiodIXJWak?si=DRyKu1HmcMy-YjAO" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Present Perfect Tense</Card.Title>
                  <Card.Text>Video ini menjelaskan penggunaan preposisi dalam bahasa Inggris.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/IcSaV_4Czcw?si=HIt8zRib_Gi_i0Mj" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Present Perfect Continuous Tense</Card.Title>
                  <Card.Text>Video ini membahas tentang penggunaan passive voice dalam bahasa Inggris.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Row>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/DHDgrU_Hlx8?si=kP0Birr89nupg5yh" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <Card.Title>Simple Past Tense</Card.Title>
                  <Card.Text>Video ini menjelaskan tentang berbagai jenis tenses 
                    dalam bahasa Inggris.</Card.Text>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/5H_245LogIA?si=n8Vlmlzfm-8GDT4N" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Past Continuous Tense</Card.Title>
                  <Card.Text>Video ini membahas tentang phrasal verbs yang penting untuk dipelajari.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/i_fzaCMs21I?si=4JJpJ24bjj5LXhhz" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Past Perfect Tense</Card.Title>
                  <Card.Text>Video ini membahas tentang phrasal verbs yang penting untuk dipelajari.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/26qG0P6nbuc?si=UUaRYKPamcqY5w1L" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Card.Body>
                  <Card.Title>Past Perfect Continuous Tense</Card.Title>
                  <Card.Text>Video ini membahas tentang phrasal verbs yang penting untuk dipelajari.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Row>
    </Container>
    
  );
}

export default Vidio;
