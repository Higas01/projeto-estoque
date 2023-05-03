import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { authContext } from "../../contexts/useAuth";
import { redirect } from "react-router-dom";

const NavBar = () => {
  const { authenticated } = useContext(authContext);

  const logout = () => {
    localStorage.removeItem("token");
    redirect("/");
    location.reload();
  };

  return (
    <>
      {authenticated ? (
        <nav className={styles.nav_no_authenticated}>
          <h2 className={styles.h2}>
            <Link to="/">HM Estoque</Link>
          </h2>
          <ul className={styles.ul}>
            <li>
              <NavLink
                to="/"
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
        </nav>
      ) : (
        <nav className={styles.nav}>
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
        </nav>
      )}
    </>
  );
};

export default NavBar;
