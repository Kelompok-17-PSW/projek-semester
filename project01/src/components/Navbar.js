import React from 'react';
import { Nav, Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fs-3">E-learn</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="fs-5">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/materi" className="fs-5">Materi</Nav.Link>
            <Nav.Link as={Link} to="/informasi" className="fs-5">Informasi</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className="fs-5">Masuk</Nav.Link>
            <Nav.Link as={Link} to="/register" className="fs-5">Daftar</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
