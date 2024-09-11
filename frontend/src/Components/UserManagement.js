import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    email: '',
    password: '',
    role: 'user', // Varsayılan olarak 'user' seçili
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/users', formData)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Kullanıcı oluşturulamadı:', error);
        alert('Kullanıcı oluşturulamadı.');
      });
  };

  return (
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
        <button type="submit" className="btn btn-primary">Kullanıcı Oluştur</button>
      </form>
    </div>
  );
};

export default UserRegistration;