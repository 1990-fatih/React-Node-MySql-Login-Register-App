import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ValidationComp/LoginValidation";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', { email, password })
      .then(response => {
        const { role, userId } = response.data;

        if (role === 'admin') {
          // Eğer kullanıcı admin ise admin sayfasına yönlendirme
          navigate(`/adminPanel`);
        } else if (role === 'user') {
          // Eğer kullanıcı normal bir kullanıcı ise sınav sayfasına yönlendirme
          navigate(`/examlist/${userId}`);
        }
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message); // Hata mesajını göster
        } else {
          setErrorMessage('Bir hata oluştu.');
        }
      });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
    role: "user", // Varsayılan olarak 'user' seçili
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/users", formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.error("Kullanıcı oluşturulamadı:", error);
        alert("Kullanıcı oluşturulamadı.");
      });
  };

  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <p style={{ textAlign: "left" }} className="col-md-8 fs-4">
        This quiz will contains total 9 questions. Each Question holds 10 Points
      </p>
      <h4 style={{ textAlign: "left" }}>Rules:</h4>
      <ol style={{ textAlign: "left" }}>
        <li>Correct Question gives you 10 points</li>
        <li>Incorrect question gives to -10 points</li>
        <li>You will have 60 sec to answer each question</li>
        <li>Refereshing the page will reset the Quiz</li>
      </ol>
      <h1 style={{ fontFamily: "cursive" }}>All the best!!</h1>
      <form onSubmit={handleLogin}>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your E-mail:</label>
          <input
            
            className="form-control"
            type="email"
           
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4 my-3"
        >
          <label for="">Enter your Password:</label>
          <input
            type="password"
            
           
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div
          style={{ fontFamily: "cursive", textAlign: "left" }}
          class="col-md-4"
        >
          <button
            style={{ float: "left" }}
            
            className="btn btn-primary btn-m"

            type="submit" 
          >
            Start the Quiz!!
          </button>
        </div>

        <div
          style={{ fontFamily: "cursive", textAlign: "end" }}
          className="col-md-4"
        >
          <button
            onClick={handleShow}
            type="button"
            class="btn btn-secondary btn-m "
          >
            Create Account
          </button>
        </div>
      </form>
      <div className="pt-4" style={{ textAlign: "left" }}></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <h2>Kullanıcı Oluştur</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>İsim:</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Soyisim:</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Doğum Tarihi:</label>
                <input
                  type="date"
                  name="birthDate"
                  className="form-control"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Şifre:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Rol:</label>
                <select
                  name="role"
                  className="form-control"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="user">Kullanıcı</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <Button className="ms-2 mt-3 d-flex float-end" type="submit" variant="primary">Senden</Button>
              <Button className="ms-2 mt-3 d-flex" variant="secondary" onClick={handleClose}>Close</Button>
              </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/adminPanel"}>
            <button>GECICI bUTTON</button>
          </Link>
          
          
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Home;
