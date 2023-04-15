import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Авторизація успішна, перенаправити на сторінку з даними профілю
        window.location.href =
          "https://www.google.com/search?q=google&oq=google++&aqs=chrome..69i57j69i59l3j69i60l4.5443j0j4&sourceid=chrome&ie=UTF-8";
      } else {
        setLoginError("Невірна електронна пошта або пароль!");
      }
    } catch (error) {
      console.error(error);
      setLoginError(
        "Сталася помилка при авторизації! неправильний логін або пароль"
      );
    }

    console.log();

    // setEmail("");
    // setPassword("");
  };

  return (
    <div className={styles.loginFormLog}>
      <h1 className={styles.title}>Авторизація</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        {loginError && <p className={styles.error}>{loginError}</p>}

        <label htmlFor="email" className={styles.labelLog}>
          Електронна пошта:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.inputLog}
        />

        <label htmlFor="password" className={styles.labelLog}>
          Пароль:
        </label>
        <div className={styles.password}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
          <span
            onClick={() => setShowPassword((prevState) => !prevState)}
            className={`${styles.showPassword} ${
              showPassword ? styles.showPasswordActive : ""
            }`}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>

        <button type="submit" className={styles.submit}>
          Увійти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
