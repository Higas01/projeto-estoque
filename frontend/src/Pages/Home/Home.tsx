import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import estoque from "../../images/estoque.webp";
import gestao from "../../images/gestao.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className={styles.section}>
        <img src={estoque} alt="" className={styles.img_estoque} />
        <div className={styles.div_section}>
          <h1 className={styles.h1}>Bem-vindo ao nosso sistema!</h1>
          <h2 className={styles.h2}>Ainda não possui uma conta?</h2>
          <p className={styles.p}>
            Clique{" "}
            <NavLink to="/register" className={styles.a}>
              aqui
            </NavLink>
            para criar uma!
          </p>
        </div>
      </section>
      <section className={styles.section2}>
        <img src={gestao} alt="" className={styles.img_gestao} />
        <div className={styles.div_section2}>
          <h1 className={styles.h1_section2}>HM Estoque</h1>
          <p className={styles.p_section2}>
            O Projeto HM Estoque foi criado para você conseguir administrar seu
            estoque de forma segura e gratuita, conseguimos nos destacar por
            sermos:
          </p>
          <p className={styles.details_section2}>•Gratuito</p>
          <p className={styles.details_section2}>•Fácil Uso</p>
          <NavLink to="/register" className={styles.register_section2}>
            Registre-se
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
