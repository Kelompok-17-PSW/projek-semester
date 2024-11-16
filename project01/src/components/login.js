import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!email) {
      errorMessages.email = 'Email/Nomor Telepon wajib diisi';
    }
    if (!password) {
      errorMessages.password = 'Password wajib diisi';
    }

    if (Object.keys(errorMessages).length > 0) {
      setError(errorMessages);
      return;
    }

    navigate('/dashboard');
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Login</h2>
          {error.form && <Alert variant="danger">{error.form}</Alert>}
          <Form onSubmit={handleLogin}>
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
            <Button variant="primary" type="submit">Login</Button>
          </Form>
          <p className="mt-3">Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
