import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddQuestion from "./AddQuestion";
import QuestionList from "./QuestionList";
import UserList from "./UserList";
import UserScoreComponent from "./UserScoreComponent";

function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("users");

  const renderComponent = () => {
    switch (activeComponent) {
      case "users":
        return <UserList />;
      case "add-fragenVerwaltung":
        return <QuestionList />;
      case "add-question":
        return <AddQuestion />;
        case "user-score":
        return <UserScoreComponent />;
      default:
        return <UserList />;
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
            <li class="list-group-item">
              {" "}
              <Button
                variant="primary"
                block
                onClick={() => setActiveComponent("user-score")}
              >
                Siehe Ergebnisse 
              </Button>
            </li>
          </ul>
        </Col>

        
        <Col sm={10}>
          <div className="content">{renderComponent()}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
