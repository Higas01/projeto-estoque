import React from "react";
import styles from "./RegisterProducts.module.css";
import { BsPencil, BsTrash } from "react-icons/bs";

type Props = {};

const RegisterProducts = (props: Props) => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.h1}>Controle seu estoque aqui</h1>
        <p className={styles.p}>Registre um produto abaixo</p>
      </div>
      <div>
        <button>Registre um produto</button>
        <table className={styles.table}>
          <thead>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Tamanho (opcional)</th>
            <th>Validade (opcional)</th>
          </thead>
          <tr>
            <td>Calça</td>
            <td>29.99</td>
            <td>M</td>
            <td> - </td>
            <td> - </td>
            <td>
              <BsPencil />
            </td>
            <td>
              <BsTrash />
            </td>
          </tr>
          <tr>
            <td>Calça</td>
            <td>29.99</td>
            <td>M</td>
            <td> - </td>
            <td> - </td>
            <td>
              <BsPencil />
            </td>
            <td>
              <BsTrash />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default RegisterProducts;
