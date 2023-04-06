import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { useContext, useEffect } from "react";
import { authContext } from "./contexts/useAuth";
import RegisterProducts from "./Pages/RegisterProducts/RegisterProducts";
import { useNavigate } from "react-router-dom";
import Logout from "./Pages/Logout/Logout";
import styles from "./App.module.css";

const url = "https://project-estoque.onrender.com";

function App() {
  const { authenticated, verifyToken, loading } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const asyncVerifyToken = async () => {
      await verifyToken();
    };
    asyncVerifyToken();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className={styles.h1}>Aguarde...</h1>
      ) : (
        <>
          {" "}
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                authenticated ? <Navigate to="/registerProducts" /> : <Home />
              }
            />
            <Route
              path="/login"
              element={
                authenticated ? (
                  <Navigate to="/registerProducts" />
                ) : (
                  <Login url={url} />
                )
              }
            />
            <Route
              path="/register"
              element={
                authenticated ? (
                  <Navigate to="/registerProducts" />
                ) : (
                  <Register url={url} />
                )
              }
            />
            <Route
              path="/registerProducts"
              element={
                authenticated ? <RegisterProducts /> : <Navigate to="/" />
              }
            />
            <Route
              path="/logout"
              element={authenticated ? <Logout /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
