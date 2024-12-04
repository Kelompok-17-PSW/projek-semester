import React from 'react';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fs-3">E-learn</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard" className="fs-5">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/materi" className="fs-5">Materi</Nav.Link>
            <Nav.Link as={Link} to="/Vidio" className="fs-5">Vidio Pembelajaran</Nav.Link>
          </Nav>
          
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
