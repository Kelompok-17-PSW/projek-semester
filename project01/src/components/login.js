import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../css/LoginRegister.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const correctPassword = 'EnglishGood'; // Password yang benar untuk validasi
  const navigate = useNavigate();

  const handleInputChange = () => {
    // Validasi input secara dinamis
    const isInputValid =
      username.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '';

    setIsButtonDisabled(!isInputValid);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let errorMessages = {};

    if (!username) {
      errorMessages.username = 'Username wajib diisi';
    }
    if (!email) {
      errorMessages.email = 'Email/Nomor Telepon wajib diisi';
    }
    if (!password) {
      errorMessages.password = 'Password wajib diisi';
    } else if (password !== correctPassword) {
      errorMessages.password = 'Password salah';
    }

    if (Object.keys(errorMessages).length > 0) {
      setError(errorMessages);
      return;
    }

    localStorage.setItem('userName', username);
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
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        handleInputChange();
                      }}
                      isInvalid={!!error.username}
                    />
                    {error.username && <Form.Control.Feedback type="invalid">{error.username}</Form.Control.Feedback>}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email/Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan email/nomor telepon"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        handleInputChange();
                      }}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                        handleInputChange();
                      }}
                      isInvalid={!!error.password}
                    />
                    {error.password && <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>}
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-3"
                    disabled={isButtonDisabled}
                  >
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
