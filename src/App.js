import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Signup2 from "./Pages/Login/Signup2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup2" element={<Signup2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
