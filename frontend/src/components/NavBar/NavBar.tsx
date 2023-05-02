import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { authContext } from "../../contexts/useAuth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { authenticated } = useContext(authContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className={styles.nav}>
      {authenticated ? (
        <>
          <h2 className={styles.h2}>
            <Link to="/">HM Estoque</Link>
          </h2>
          <ul className={styles.ul}>
            <li>
              <NavLink
                to="/registerProducts"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "active" : ""
                }
              >
                Cadastrar Produto
              </NavLink>
            </li>
            <li>
              <input
                type="button"
                value="Logout"
                className={styles.input_btn}
                onClick={logout}
              />
            </li>
          </ul>
        </>
      ) : (
        <>
          <h2 className={styles.h2}>
            <Link to="/">HM Estoque</Link>
          </h2>
          <ul className={styles.ul}>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "active" : ""
                }
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "active" : ""
                }
              >
                Cadastre-se
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default NavBar;
