import "./App.css";
import FragenEingabe from "./Components/AdminComponent/FragenEingabe";
import Header from "./Components/Header";
import Home from "./Components/Home";
import UserRegistration from "./Components/UserRegistration";
import UserControlPanel from "./Components/AdminComponent/UserControlPanel";
import AdminFragenmanagement from "./Components/AdminComponent/AdminFragenmanagement"

import Question from "./Components/Question";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    
    userFirst_name: "",
    usersLast_name: "",
    email:"",
    usersPassword: "",
    usersGeburtsjahr: "null"
  });

  const deleteUser =(id) =>{
    axios.delete(`delete/${id}`);
    alert(`The User with id ${id} is deleted`)
   }

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
          <Route path="/fragenManagement" element={<FragenEingabe/>} />
          <Route path="/userContol" element={<UserControlPanel users={users} deleteUser={deleteUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
