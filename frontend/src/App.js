import "./App.css";
import FragenEingabe from "./Components/FragenEingabe";
import Header from "./Components/Header";
import Home from "./Components/Home";

import Question from "./Components/Question";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
         <Header/>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/question" element={<Question/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addFrage" element={<FragenEingabe/>}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
