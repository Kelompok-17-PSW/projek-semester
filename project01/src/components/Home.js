import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
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
  );
}

export default Home;
