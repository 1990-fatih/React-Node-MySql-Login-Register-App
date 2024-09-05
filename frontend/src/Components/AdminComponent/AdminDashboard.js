import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import FragenControlPanel from './FragenControlPanel';

function AdminLayout() {
  
    const navigate = useNavigate();
    const component=useState([])

  const goToUsers = () => {
    component=  <FragenControlPanel/>
  };

  const goToQuestions = () => {
    navigate("/FragenControlPanel");
  };

  const goToAddQuestion = () => {
    navigate("/userContol");
  };

  return (
    <Container fluid>
      <Row>
        {/* Sol Menü */}
        <Col sm={2} className="bg-light sidebar">
          <h4>Admin Paneli</h4>
          <Button variant="primary" className="mb-2" block onClick={goToUsers}>
            Kullanıcı Yönetimi
          </Button>
          <Button variant="primary" className="mb-2" block onClick={goToQuestions}>
            Soru Yönetimi
          </Button>
          <Button variant="primary" block onClick={goToAddQuestion}>
            Yeni Soru Ekle
          </Button>
        </Col>

        {/* Sağ İçerik Bölümü */}
        <Col sm={10}>
          <div className="content">
            {component}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLayout;