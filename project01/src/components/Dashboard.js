import React, {useEffect, useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBook, FaPenFancy, FaQuestionCircle, FaGraduationCap, FaComments, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import studentsImage from "../images/students2.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName") || "Kamu";
    setUserName(storedUserName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={12} className="mb-4">
          <Card className="welcome-card">
            <Card.Body>
              <div className="welcome-content">
                <div className="welcome-image">
                  <img src={studentsImage} alt="User" className="rounded-circle" />
                </div>
                <div className="welcome-text">
                  <h1 className="display-4"><strong>Dashboard</strong></h1>
                  <p className="lead">Halo, {userName} </p>
                  <p>How's your day? Nikmati Pembelajaran bahasa Inggrismu dan tetap semangat!</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/kuis")}>
            <Card.Body>
              <FaQuestionCircle size={50} color="#ffc107" />
              <Card.Title>Latihan Soal</Card.Title>
              <Card.Text>Tersedia ratusan latihan soal</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/materi")}>
            <Card.Body>
              <FaBookOpen size={50} color="#6f42c1" />
              <Card.Title>Materi</Card.Title>
              <Card.Text>Tersedia materi tenses secara lengkap</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/TO")}>
            <Card.Body>
              <FaBookOpen size={50} color="#6f42c1" />
              <Card.Title>Try Out</Card.Title>
              <Card.Text>Ikuti Try Out untuk menguji kemampuanmu</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4" >
            <Card.Body>
              <Card.Title>Selamat Datang, Pelajar Bahasa Inggris!</Card.Title>
              <Card.Text>
                Hello! Selamat datang di Dashboard Belajar Bahasa Inggris kamu. Di sini kamu bisa melacak pelajaran, latihan menulis, kuis, dan performa keseluruhanmu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4" >
            <Card.Body>
              <Card.Title>Kemajuan Terkini</Card.Title>
              <Card.Text>
                Bagus sekali! Kamu sedang dalam jalur untuk menguasai bahasa Inggris. Teruskan!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Motivasi & Tips</Card.Title>
              <Card.Text>
                <FaLightbulb size={20} /> "Konsistensi adalah kunci untuk menguasai bahasa baru. Terus berlatih!"
              </Card.Text>
              <Card.Text>
                <FaLightbulb size={20} /> Tip: "Cobalah berpikir dalam bahasa Inggris sebanyak mungkin selama aktivitas sehari-hari."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Cara cepat</Card.Title>
              <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/B2IldXHBDA0?si=bRRGQVNuoeetP0wZ" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="logout-container">
        <Button 
          variant="danger" 
          onClick={handleLogout} 
          className="logout-button"
        >
          Logout
        </Button>
      </div>
    </Container>
  );
}

export default Dashboard;
