import styles from "./RegisterProducts.module.css";
import { useEffect, useState, useRef, FormEvent, ChangeEvent } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useProductsFetch } from "../../hooks/useProductsFetch";

type Props = {
  url: string;
};

const RegisterProducts = ({ url }: Props) => {
  const { data, loading, error, fetchData } = useProductsFetch(url);
  const [submitMsg, setSubmitMsg] = useState("");
  const [products, setProducts] = useState<Array<any>>([]);
  const [product, setProduct] = useState<string>("");
  const [value, setValue] = useState<number | null>(null);
  const [size, setSize] = useState<string>("");
  const [qntd, setQntd] = useState<number | null>(null);
  const [validateProduct, setValidateProduct] = useState<string>("");
  const token = localStorage.getItem("token") ?? "";
  const tokenValidate = token.replace(/"/g, "");

  const handleModal = () => {
    const modal = document.querySelector(`.${styles.modal_hidden}`);
    modal?.classList.remove(styles.modal_hidden);
    modal?.classList.add(styles.modal);
  };

  const handleShowModal = () => {
    const modal = document.querySelector(`.${styles.modal}`);
    modal?.classList.remove(styles.modal);
    modal?.classList.add(styles.modal_hidden);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const modal = document.querySelector(`.${styles.modal}`);
    e.preventDefault();

    if (!product) {
      setSubmitMsg("Nome do produto é obrigátorio");
      return;
    }

    if (!value) {
      setSubmitMsg("Valor do produto é obrigatório");
      return;
    }

    if (!qntd) {
      setSubmitMsg("Quantidade do produto é obrigátorio");
      return;
    }

    const dataValue: Object = {
      product,
      value,
      validateProduct,
      size,
      qntd,
    };

    const res = await fetchData(
      "products/add",
      "POST",
      tokenValidate,
      dataValue
    );
    modal?.classList.remove(styles.modal);
    modal?.classList.add(styles.modal_hidden);
    console.log(res);
    setProduct("");
    setValue(null);
    setSize("");
    setQntd(null);
    setValidateProduct("");
  };

  useEffect(() => {
    const getItems = async () => {
      const getProducts = await fetchData("products", "GET", tokenValidate);
      setProducts(getProducts);
    };
    getItems();
  }, [data, handleSubmit]);

  return (
    <section>
      <div className={styles.modal_hidden}>
        <div className={styles.container_input_modal}>
          <button className={styles.modal_btn} onClick={handleShowModal}>
            X
          </button>
          <form onSubmit={handleSubmit}>
            <div className={styles.container_inputs}>
              <label>
                <span>Nome do produto: </span>
                <input
                  type="text"
                  className={styles.inputs_create_products}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setProduct(e.target.value)
                  }
                  value={product}
                />
              </label>
            </div>
            <div className={styles.container_inputs}>
              <label>
                <span>Valor do produto: </span>
                <input
                  type="number"
                  className={styles.inputs_create_products}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(Number(e.target.value))
                  }
                  value={value ? value : ""}
                />
              </label>
            </div>
            <div className={styles.container_inputs}>
              <label>
                <span>Quantidade do produto: </span>
                <input
                  type="number"
                  className={styles.inputs_create_products}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setQntd(Number(e.target.value))
                  }
                  value={qntd ? qntd : ""}
                />
              </label>
            </div>
            <div className={styles.container_inputs}>
              <label>
                <span>Tamanho do produto (opcional): </span>
                <input
                  type="text"
                  className={styles.inputs_create_products}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSize(e.target.value);
                  }}
                  value={size}
                />
              </label>
            </div>
            <div className={styles.container_inputs}>
              <label>
                <span>Validade do produto (opcional): </span>
                <input
                  type="date"
                  className={styles.inputs_create_products}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setValidateProduct(e.target.value);
                  }}
                  value={validateProduct}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Enviar"
              className={styles.create_products_submit}
            />
          </form>
          {submitMsg && <p className={styles.p_modal}>{submitMsg}</p>}
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1}>Controle seu estoque aqui</h1>
        <p className={styles.p}>Registre um produto abaixo</p>
      </div>
      <div className={styles.create_btn_container}>
        <button className={styles.btn_create} onClick={handleModal}>
          Registre um produto
        </button>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Tamanho (opcional)</th>
            <th>Validade (opcional)</th>
          </thead>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.product}</td>
                <td>R${product.value}</td>
                <td>{product.qntd ? `${product.qntd} unidade(s)` : " - "}</td>
                <td>{product.size ? product.size : "-"}</td>
                <td>
                  {product.validateProduct ? product.validateProduct : "-"}
                </td>
                <td>
                  <BsPencil />
                </td>
                <td>
                  <BsTrash />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Você ainda não registrou nenhum produto </td>
            </tr>
          )}
        </table>
      </div>
    </section>
  );
};

export default RegisterProducts;
