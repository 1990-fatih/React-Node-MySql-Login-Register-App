import "./App.css";
import FragenEingabe from "./Components/AdminComponent/FragenEingabe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import UserControlPanel from "./Components/AdminComponent/UserControlPanel";
import FragenControlPanel from "./Components/AdminComponent/FragenControlPanel";

import Question from "./Components/Question";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard";

function App() {
  
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
          <Route path="/FragenControlPanel" element={<FragenControlPanel />} />
         
          <Route path="/userContol" element={<UserControlPanel />} />
          <Route path="/adminPanel" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
