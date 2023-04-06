import React from "react";
import styles from "./RegisterProducts.module.css";

type Props = {};

const RegisterProducts = (props: Props) => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.h1}>Controle seu estoque aqui</h1>
        <p className={styles.p}>Registre um produto abaixo</p>
        <input
          type="button"
          value="Registrar produto"
          className={styles.btn}
          onClick={() => console.log("hello word")}
        />
      </div>
    </section>
  );
};

export default RegisterProducts;
