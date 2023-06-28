import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/Login.js";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
