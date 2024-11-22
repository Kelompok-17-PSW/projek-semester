import React from 'react';
import { Container, Button, Row, Col,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import tipsImage from '../images/Gambar1.jpg';

const Home = () => {
  return (
    <>
    <div className="home-background">
      <div className="overlay"></div> 
      <Container className="content">
        <h1 className="display-1 fw-bold">Welcome to E-Learn</h1>
        <p className="display-5">The best English learning website for you</p>
        <p className="lead fw-bold">Khusus kelas 12 SMA</p>
        <div className="button-group">
          <Button as={Link} to="/login" style={{ backgroundColor: 'black', borderColor: 'black' }} size="lg">
            Login Now
          </Button>
          <Button as={Link} to="/Register" style={{ backgroundColor: 'black', borderColor: 'black' }} size="lg">
            Registrasi Now
          </Button>
        </div>
      </Container>
    </div>

      {/* Tips&Trick */}
      <Container className="tips-container mt-5">
        <Row className="align-items-center">
          <Col md={4}>
            <Image src={tipsImage} rounded fluid className="mb-3" /> 
          </Col>
          <Col md={8}>
            <h2 className="tips-title">
              <Link to="/tips" className="tips-link">Tips & Trick Meningkatkan Kemampuan Berbahasa Inggris</Link>
            </h2>
            <p>Kamu kesulitan dalam meningkatkan skill berbahasa inggrismu?Ayo Ikuti tips & trick dari E-learn</p>
            <Button as={Link} to="/tips" variant="primary">Let's Get Started</Button>
          </Col>
        </Row>
      </Container>  
    </>
  );
}

export default Home;
