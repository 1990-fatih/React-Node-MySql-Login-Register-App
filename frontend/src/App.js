import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import Question from "./Components/Question";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React from "react";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard";
import NotFound from "./Components/NotFound";

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
          <Route path="/userRegister" element={<UserRegistration />} />        
          <Route path="/adminPanel" element={<AdminDashboard />} />
          <Route component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
