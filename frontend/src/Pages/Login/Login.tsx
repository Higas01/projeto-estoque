import React from "react";
import styles from "./Login.module.css";
import { useState, FormEvent, ChangeEvent, useEffect, useContext } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRegisterFetch } from "../../hooks/useRegisterFetch";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/useAuth";

type props = {
  url: string;
};

interface Response {
  message: string;
  token: string;
  error: string;
}

const Login = ({ url }: props) => {
  const { authenticated, setAuthenticated } = useContext(authContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [beforeError, setBeforeError] = useState("");
  const { data, loading, error, fetchData } = useRegisterFetch(url);
  const [mensagem, setMensagem] = useState<string>("");
  const [errorAPI, setErrorAPI] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setMensagem("");
    setErrorAPI("");
    if (!data) {
      return;
    }

    if (data && (data as Response).token) {
      localStorage.setItem("token", JSON.stringify((data as Response).token));
    }
    setMensagem((data as Response).message);
    setErrorAPI((data as Response).error);
  }, [data]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setBeforeError("");
    setMensagem("");
    setErrorAPI("");
    e.preventDefault();

    if (!email) {
      setBeforeError("Campo e-mail precisa ser preenchido");
      return;
    }

    if (!password) {
      setBeforeError("Campo senha precisa ser preenchido");
      return;
    }

    const value = {
      email,
      password,
    };

    await fetchData(value, "login", "POST");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <AiOutlineMail className={styles.icons} />
          <input
            type="email"
            required
            className={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className={styles.input_container}>
          <AiOutlineLock className={styles.icons} />
          <input
            type="password"
            required
            className={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <input type="submit" value="Entrar" className={styles.btn} />
      </form>
      {beforeError && <p className={styles.mensagem}>{beforeError}</p>}
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
      {loading && <p className={styles.mensagem}>Aguarde...</p>}
      {errorAPI && <p className={styles.mensagem}>{errorAPI}</p>}
    </section>
  );
};

export default Login;
