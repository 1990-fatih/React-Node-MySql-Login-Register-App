import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserControlPanel from "./UserControlPanel";
import FragenControlPanel from "./FragenControlPanel";
import FragenEingabe from "./FragenEingabe";

function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("users");

  const renderComponent = () => {
    switch (activeComponent) {
      case "users":
        return <UserControlPanel />;
      case "add-fragenVerwaltung":
        return <FragenControlPanel />;
      case "add-question":
        return <FragenEingabe />;
      default:
        return <UserControlPanel />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-light sidebar">
          <h4>Admin Dashboard</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {" "}
              <Button
                variant="primary"
                className="mb-2"
                block
                onClick={() => setActiveComponent("users")}
              >
                Benutzer Verwaltung
              </Button>
            </li>
            <li class="list-group-item">
              {" "}
              <Button
                variant="primary"
                className="mb-2"
                block
                onClick={() => setActiveComponent("add-fragenVerwaltung")}
              >
                Fragen Verwaltung
              </Button>
            </li>
            <li class="list-group-item">
              {" "}
              <Button
                variant="primary"
                block
                onClick={() => setActiveComponent("add-question")}
              >
                Fragen Eingabe
              </Button>
            </li>
          </ul>
        </Col>

        {/* Sağ İçerik Bölümü */}
        <Col sm={10}>
          <div className="content">{renderComponent()}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
