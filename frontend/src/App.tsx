import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { AuthProvider } from "./contexts/useAuth";
import { useContext } from "react";
import { authContext } from "./contexts/useAuth";

const url = "https://project-estoque.onrender.com";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login url={url} />} />
          <Route path="/register" element={<Register url={url} />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
