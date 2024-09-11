import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import React from "react";
import AdminDashboard from "./Components/AdminComponent/AdminDashboard";
import NotFound from "./Components/NotFound";
import UserList from "./Components/AdminComponent/UserList";
import Quiz from "./Components/Quiz";
import ExamList from "./Components/ExamComponent/ExamList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:userId" element={<Quiz />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userRegister" element={<UserRegistration />} />
          <Route path="/adminPanel" element={<AdminDashboard />} />
          <Route path="/test" element={<UserList />} />
          <Route path="/examlist/:userId" component={<ExamList/>} />
          <Route component={NotFound}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
