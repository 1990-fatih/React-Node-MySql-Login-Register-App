import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");

  // Kullanıcıları veritabanından çek
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Kullanıcıları çekerken hata oluştu:", error);
    }
  };

  // Kullanıcı silme fonksiyonu
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      fetchUsers(); // Silmeden sonra kullanıcıları tekrar getir
    } catch (error) {
      console.error("Kullanıcı silinirken hata oluştu:", error);
    }
  };

  // Modal açma ve seçilen kullanıcının bilgilerini ayarlama
  const openUpdateModal = (user) => {
    setSelectedUser(user);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setBirthDate(user.birth_date);
    setRole(user.role);
    setPassword(""); // Şifreyi boş bırak
    setShowModal(true);
  };

  // Modal kapama
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  // Formu gönderme (Kullanıcı güncelleme işlemi)
  const handleSubmit = async () => {
    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      email,
      birth_date: birthDate,
      role,
      password,
    };

    try {
      await axios.put(`http://localhost:5000/users/${selectedUser.id}`, updatedUser);
      alert("Kullanıcı başarıyla güncellendi");
      fetchUsers(); // Güncelleme işleminden sonra kullanıcıları tekrar getir
      handleCloseModal();
    } catch (error) {
      console.error("Kullanıcı güncellenirken hata oluştu:", error);
    }
  };

  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <h1 className="display-5 fw-bold">Kullanıcı Yönetimi</h1>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ad</th>
            <th scope="col">Soyad</th>
            <th scope="col">Email</th>
            <th scope="col">Doğum Tarihi</th>
            <th scope="col">Rol</th>
            <th scope="col" colSpan="2">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.birth_date}</td>
              <td>{user.role}</td>
              <td>
                <Button onClick={() => openUpdateModal(user)}>Güncelle</Button>
                <Button className="ms-2" onClick={() => deleteUser(user.id)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Kullanıcı Güncelleme Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Kullanıcı Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Ad</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Soyad</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Doğum Tarihi</Form.Label>
              <Form.Control
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rol</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">Kullanıcı</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Güncelle
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserList;
