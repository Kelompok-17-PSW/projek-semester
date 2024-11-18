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
    <div className="login-container">
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col md={6} lg={4} className="px-4 py-5 shadow rounded bg-white">
            <div className="login-card">
              <h2 className="text-center mb-4">Login</h2>
              {/* Display general error if any */}
              {error.form && <Alert variant="danger">{error.form}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email/Nomor Telepon</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan email/nomor telepon"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error.email}
                  />
                  {error.email && <small className="text-danger">{error.email}</small>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!error.password}
                  />
                  {error.password && <small className="text-danger">{error.password}</small>}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 py-2">
                  Login
                </Button>
              </Form>

              <p className="mt-3 text-center">
                Belum punya akun? <Link to="/register">Daftar di sini</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
