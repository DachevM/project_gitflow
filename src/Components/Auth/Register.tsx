import { type FC, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import type * as yup from "yup";
import type React from "react";

import "./auth.css";

import { schema } from "../helper";

const Register: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [registerRePass, setRegisterRePass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isAuthError, setIsAuthError] = useState<boolean>(false);

  const navigate = useNavigate();

  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = useCallback(() => {
    setIsVisible((isVisible) => !isVisible);
  }, []);

  const SavePass = useCallback(
    async (data: FormData) => {
      if (
        await axios
          .post("https://myshop-api.onrender.com/api/user/registration", {
            username: data.email,
            password: data.password,
          })
          .catch((e) => setErrorMessage(e.response.data.message))
      ) {
        navigate("/auth/login");
      } else {
        setIsAuthError(true);
      }
      setRegisterRePass("");
      setRegisterEmail("");
      setRegisterPass("");
    },
    [navigate]
  );

  const InputPassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterPass(e.target.value);
    },
    []
  );
  const InputRePassChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterRePass(e.target.value);
    },
    []
  );

  const InputLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterEmail(e.target.value);
    },
    []
  );

  return (
    <form className={"register_form"} onSubmit={handleSubmit(SavePass)}>
      <h1 className={"enter"}>Создание учетной записи</h1>
      <div className={"inp_box"}>
        <label className={"auth_label"} form={"outlined-basic"}>
          E-mail
        </label>
        <input
          {...register("email")}
          type={"text"}
          value={registerEmail}
          onChange={InputLoginChange}
          placeholder={"Введите свой e-mail"}
          className={
            isAuthError || errors?.email ? "input_auth_error" : "input_auth"
          }
        />
        {(isAuthError && (
          <span className={"error_message"}>{errorMessage}</span>
        )) ||
          (errors?.email && (
            <span className={"error_message"}>{errors?.email?.message}</span>
          ))}
      </div>
      <label className={"auth_label"} form={"outlined-basic"}>
        Пароль
      </label>
      <div className={"inp_box"}>
        <div className={"inp_box_pass"}>
          <input
            {...register("password")}
            type={isVisible ? "password" : "text"}
            value={registerPass}
            onChange={InputPassChange}
            placeholder={"Введите свой пароль"}
            className={
              isAuthError || errors.password
                ? "input_auth_pass_error"
                : "input_auth_pass"
            }
          />
          <button
            type={"button"}
            onClick={handleClickShowPassword}
            className={
              isVisible ? "input_box_button" : "input_box_button_visible"
            }
          ></button>
        </div>
        {errors?.password && (
          <span className={"error_message"}>{errors?.password?.message}</span>
        )}
      </div>
      <div></div>
      <label className={"auth_label"} form={"outlined-basic"}>
        Повторите пароль
      </label>
      <div className={"inp_box"}>
        <div className={"inp_box_pass"}>
          <input
            {...register("passwordConfirmation")}
            type={isVisible ? "password" : "text"}
            value={registerRePass}
            onChange={InputRePassChange}
            placeholder={"Повторите пароль"}
            className={
              isAuthError || errors.passwordConfirmation
                ? "input_auth_pass_error"
                : "input_auth_pass"
            }
          />
          <button
            type={"button"}
            onClick={handleClickShowPassword}
            className={
              isVisible ? "input_box_button" : "input_box_button_visible"
            }
          ></button>
        </div>
        {errors?.passwordConfirmation && (
          <span className={"error_message"}>
            {errors?.passwordConfirmation.message}
          </span>
        )}
      </div>
      <div className={"butt_box"}>
        <button type={"submit"} className={"auth_butt"}>
          Регистрация
        </button>
        <div className={"link_to_auth"}>
          <Link className={"link"} to={"/auth/login"}>
            У меня еще нет аккаунта
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
