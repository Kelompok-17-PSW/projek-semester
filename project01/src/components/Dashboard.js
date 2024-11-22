import React, {useEffect, useState} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBook, FaPenFancy, FaQuestionCircle, FaGraduationCap, FaBell, FaTasks, FaComments, FaLightbulb, FaBookOpen } from 'react-icons/fa';
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
    navigate("/login");
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
          <Card className="text-center mb-4" onClick={() => handleNavigate("/aktivitas-mingguan")}>
            <Card.Body>
              <FaBook size={50} color="#17a2b8" />
              <Card.Title>Aktivitas Mingguan</Card.Title>
              <Card.Text>Selesai: - pelajaran</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/latihan-menulis")}>
            <Card.Body>
              <FaPenFancy size={50} color="#28a745" />
              <Card.Title>Latihan Menulis</Card.Title>
              <Card.Text>Submit: 3 esai</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/kuis")}>
            <Card.Body>
              <FaQuestionCircle size={50} color="#ffc107" />
              <Card.Title>Kuis</Card.Title>
              <Card.Text>Tersedia: 4 kuis</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/materi")}>
            <Card.Body>
              <FaBookOpen size={50} color="#6f42c1" />
              <Card.Title>Materi</Card.Title>
              <Card.Text>Tersedia: 20 materi</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/forum-diskusi")}>
            <Card.Body>
              <FaComments size={50} color="#007bff" />
              <Card.Title>Forum Diskusi</Card.Title>
              <Card.Text>Diskusi aktif: 12</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center mb-4" onClick={() => handleNavigate("/nilai")}>
            <Card.Body>
              <FaGraduationCap size={50} color="#dc3545" />
              <Card.Title>Nilai Keseluruhan</Card.Title>
              <Card.Text>Rata-rata: 100%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {}
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
      {}
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
        <Col className="text-right">
          <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
}
 export default Dashboard;