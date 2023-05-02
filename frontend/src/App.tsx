import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { useContext, useEffect, useState } from "react";
import { authContext } from "./contexts/useAuth";
import RegisterProducts from "./Pages/RegisterProducts/RegisterProducts";
import styles from "./App.module.css";

const url = "https://projeto-estoque.onrender.com";

function App() {
  const { authenticated, verifyToken } = useContext(authContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const asyncVerifyToken = async () => {
      await verifyToken();
    };
    asyncVerifyToken();
    setLoading(false);
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
                authenticated ? <RegisterProducts url={url} /> : <Home />
              }
            />
            <Route
              path="/login"
              element={
                authenticated ? <Navigate to="/" /> : <Login url={url} />
              }
            />
            <Route
              path="/register"
              element={
                authenticated ? <Navigate to="/" /> : <Register url={url} />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
