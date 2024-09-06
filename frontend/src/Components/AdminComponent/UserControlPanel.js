import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";

function UserControlPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Fehler beim Laden der User:", error));
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:8800/deleteUser/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [values, setValues] = useState({
    userFirst_name: "",
    usersLast_name: "",
    email: "",
    usersPassword: "",
    usersGeburtsjahr: "null",
  });

  const navigate = useNavigate();
  const location = useLocation("/");

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + e, values);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container bg-light py-5 mt-5 rounded-end">
      <h1 className="display-5 fw-bold">Welocme to Quiz App</h1>
      <h1 style={{ fontFamily: "cursive" }}>User List</h1>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name </th>
            <th scope="col">Password</th>

            <th scope="col">E-Mail</th>
            <th scope="col">Geburtsjahr</th>
            <th scope="col" colSpan={"2"}>
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr scope="col" key={index}>
                <td scope="col">{user.usersId}</td>
                <td>{user.userFirst_name}</td>
                <td>{user.usersLast_name}</td>
                <td type="password">{user.usersPassword}</td>
                <td>{user.email}</td>
                <td>{user.usersGeburtsjahr}</td>
                <th scope="col" colSpan={"2"}>
                  <button
                    onClick={() => deleteUser(user.usersId)}
                    type="button"
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                  <button type="button" className="btn btn-primary m-1">
                    Update
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="form bg-secondary.bg-gradient">
        <h1>Update the Book</h1>
        <input
          type="text"
          name="userFirst_name"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="text"
          name="usersLast_name"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="password"
          name="usersPassword"
          className="form-control"
          onChange={handleInput}
        />
        <input
          type="number"
          name="usersGeburtsjahr"
          className="form-control"
          onChange={handleInput}
        />

        <button onClick={handelClick}>Update</button>
      </div>
    </div>
  );
}

export default UserControlPanel;
