import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import tipsImage from '../images/Gambar1.jpg';

const Home = () => {
  return (
    <>
      <div className="home-background">
        <div className="overlay"></div> 
        <div className="content">
          <h1 className="display-1 fw-bold">Welcome to E-Learn</h1>
          <p className="display-5 text-center mb-4">The best English learning website for you</p>
          <p className="lead fw-bold text-center">Khusus kelas 12 SMA</p>
          <div className="button-group">
            <Button as={Link} to="/login" style={{ backgroundColor: 'black', borderColor: 'black' }} size="lg">
              Login
            </Button>
            <Button as={Link} to="/register" style={{ backgroundColor: 'black', borderColor: 'black' }} size="lg">
              Registration
            </Button>
          </div>
        </div>
      </div>

      {/* Tips & Trick */}
      <div className="tips-container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={tipsImage} className="img-fluid rounded mb-3" alt="Tips & Tricks"/>
          </div>
          <div className="col-md-8">
            <h2 className="tips-title">
              <Link to="/tips" className="tips-link">Tips & Trick Meningkatkan Kemampuan Berbahasa Inggris</Link>
            </h2>
            <p>Kamu kesulitan dalam meningkatkan skill berbahasa inggrismu? Ayo Ikuti tips & trick dari E-learn</p>
            <Button as={Link} to="/tips" variant="primary">Let's Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
