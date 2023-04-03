import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Bem-vindo ao nosso sistema!</h1>
      <h2 className={styles.h2}>Ainda não possui uma conta?</h2>
      <p className={styles.p}>
        Clique{" "}
        <NavLink to="/register" className={styles.a}>
          aqui
        </NavLink>{" "}
        para criar uma!
      </p>
    </section>
  );
};

export default Home;
