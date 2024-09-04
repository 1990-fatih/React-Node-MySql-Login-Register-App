import "./App.css";
import FragenEingabe from "./Components/AdminComponent/FragenEingabe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import UserControlPanel from "./Components/AdminComponent/UserControlPanel";
import AdminFragenmanagement from "./Components/AdminComponent/AdminFragenmanagement";

import Question from "./Components/Question";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";

function App() {

 

  const deleteUser = (id) => {
    axios.delete(`delete/${id}`);
    alert(`The User with id ${id} is deleted`);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addFrage" element={<FragenEingabe />} />
          <Route path="/userRegister" element={<UserRegistration />} />
          <Route path="/fragenManagement" element={<FragenEingabe />} />
          <Route
            path="/userContol"
            element={<UserControlPanel/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
