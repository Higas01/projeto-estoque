import React from "react";
import { useState, FormEvent, ChangeEvent } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import styles from "./Register.module.css";
import validator from "validator";
import { useRegisterFetch } from "../../hooks/useRegisterFetch";

interface props {
  url: string;
}

const Register = ({ url }: props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [beforeError, setBeforeError] = useState<string>("");
  const [message, setMessage] = useState<object | undefined>({});
  const { data, loading, error, fetchData } = useRegisterFetch(url);

  const handleSubmtit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      setBeforeError("Por favor, digite um e-mail válido!");
      return;
    }

    if (password.length <= 6) {
      setBeforeError("Senha precisa ter mais que 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setBeforeError("Campo senha e confirmar senha precisam ser iguais");
      return;
    }
    const value: Object = {
      email,
      password,
      confirmPassword,
    };

    const result = await fetchData(value, "register", "POST");
    setMessage(result);
    console.log(message);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Registre-se em nosso sistema</h1>
      <form className={styles.form} onSubmit={handleSubmtit}>
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
        <div className={styles.input_container}>
          <AiOutlineLock className={styles.icons} />
          <input
            type="password"
            required
            className={styles.input}
            placeholder="Digite sua senha novamente"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
        </div>
        <input type="submit" value="Criar conta" className={styles.btn} />
      </form>
    </section>
  );
};

export default Register;
