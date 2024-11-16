import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!username) {
      errorMessages.username = 'Nama pengguna wajib diisi';
    }
    if (!email) {
      errorMessages.email = 'Email/Nomor Telepon wajib diisi';
    }
    if (!password) {
      errorMessages.password = 'Password wajib diisi';
    }
    if (!dob) {
      errorMessages.dob = 'Tanggal lahir wajib diisi';
    }

    if (Object.keys(errorMessages).length > 0) {
      setError(errorMessages);
      return;
    }

    navigate('/login');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Register</h2>
          {error.form && <Alert variant="danger">{error.form}</Alert>}
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan nama pengguna" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              {error.username && <small className="text-danger">{error.username}</small>}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email/Nomor Telepon</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan email/nomor telepon" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              {error.email && <small className="text-danger">{error.email}</small>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Masukkan password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              {error.password && <small className="text-danger">{error.password}</small>}
            </Form.Group>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control 
                type="date" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)} 
              />
              {error.dob && <small className="text-danger">{error.dob}</small>}
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
          </Form>
          <p className="mt-3">Sudah punya akun? <Link to="/login">Login di sini</Link></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
