import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Register from "../pages/Register/Register";

const url = "http://localhost:3000";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Register url={url} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
