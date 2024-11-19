import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
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

    const storedUserName = email.split('@')[0]; 
    localStorage.setItem('userName', storedUserName);

    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="login-card shadow">
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                {error.form && <Alert variant="danger">{error.form}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email/Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan email/nomor telepon"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={!!error.email}
                    />
                    {error.email && <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>}
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      isInvalid={!!error.password}
                    />
                    {error.password && <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>}
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Login
                  </Button>
                </Form>
                <p className="mt-3 text-center">
                  Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
