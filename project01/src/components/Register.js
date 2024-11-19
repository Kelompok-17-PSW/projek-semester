import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password, dob } = formData;
    const errorMessages = {};

    if (!username) errorMessages.username = 'Nama pengguna wajib diisi';
    if (!email) errorMessages.email = 'Email/Nomor Telepon wajib diisi';
    if (!password) errorMessages.password = 'Password wajib diisi';
    if (!dob) errorMessages.dob = 'Tanggal lahir wajib diisi';

    if (Object.keys(errorMessages).length > 0) {
      setError(errorMessages);
      return;
    }

    navigate('/login');
  };

  return (
    <div className="register-container">
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="justify-content-center w-100">
          <Col md={6} lg={5} className="px-4 py-5 shadow rounded bg-white">
            <div className="register-card">
              <h2 className="text-center mb-4">Register</h2>
              {/* Display general error if any */}
              {error.form && <Alert variant="danger">{error.form}</Alert>}
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formBasicUsername" className="mb-3">
                  <Form.Label>Nama Pengguna</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Masukkan nama pengguna"
                    value={formData.username}
                    onChange={handleInputChange}
                    isInvalid={!!error.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email/Nomor Telepon</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Masukkan email/nomor telepon"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!error.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Masukkan password"
                    value={formData.password}
                    onChange={handleInputChange}
                    isInvalid={!!error.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicDate" className="mb-4">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    isInvalid={!!error.dob}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.dob}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3 py-2">
                  Register
                </Button>
              </Form>

              <p className="mt-3 text-center">
                Sudah punya akun? <Link to="/login">Login di sini</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
