import { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import type React from "react";

import { AuthContext } from "../../Context/context";

import "./auth.css";

const AuthLogin = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPass, setLoginPass] = useState<string>("");
  const [isAuthError, setIsAuthError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickShowPassword = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  const auth = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (
        await axios
          .post("https://myshop-api.onrender.com/api/user/login", {
            username: loginEmail,
            password: loginPass,
          })
          .catch((e) => setErrorMessage(e.response.data.message))
      ) {
        setIsAuth(true);
        navigate("/products");
      } else {
        setIsAuthError(true);
      }
      setLoginEmail("");
      setLoginPass("");
    },
    [loginEmail, loginPass, navigate, setIsAuth]
  );

  const InputPassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginPass(e.target.value);
    },
    []
  );

  const InputLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginEmail(e.target.value);
    },
    []
  );

  return (
    <form className={"login_box"} onSubmit={auth}>
      <h1 className={"enter"}>Вход в учетную запись</h1>
      <div className={"inp_box"}>
        <label className={"auth_label"} form={"outlined-basic"}>
          E-mail
        </label>
        <input
          type={"text"}
          value={loginEmail}
          onChange={InputLoginChange}
          placeholder={"Введите свой e-mail"}
          className={isAuthError ? "input_auth_error" : "input_auth"}
        />
        {isAuthError && <span className={"error_message"}>{errorMessage}</span>}
      </div>

      <label className={"auth_label"} form={"outlined-basic"}>
        Пароль
      </label>
      <div className={"inp_box_pass"}>
        <input
          type={isVisible ? "password" : "text"}
          value={loginPass}
          onChange={InputPassChange}
          placeholder={"Введите свой пароль"}
          className={isAuthError ? "input_auth_pass_error" : "input_auth_pass"}
        />
        <button
          type={"button"}
          onClick={handleClickShowPassword}
          className={
            isVisible ? "input_box_button" : "input_box_button_visible"
          }
        ></button>
      </div>
      {isAuthError && <span className={"error_message"}>{errorMessage}</span>}
      <label className={"label_login"}>
        <input type={"checkbox"} className={"login_checkbox"} />
        <span className={"fake_login"}></span>
        <span className={"text_login"}>Запомнить меня</span>
      </label>
      <div className={"butt_box"}>
        <button type={"submit"} className={"auth_butt"}>
          Войти
        </button>
        <div className={"link_to_auth"}>
          <Link className={"link"} to={"/auth/register"}>
            У меня еще нет аккаунта
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthLogin;
