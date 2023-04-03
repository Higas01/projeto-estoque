import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { authContext } from "../../contexts/useAuth";

type Props = {};

const NavBar = (props: Props) => {
  return (
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
  );
};

export default NavBar;
