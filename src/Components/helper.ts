import * as yup from "yup";
const schema = yup
  .object({
    email: yup
      .string()
      .required("Обязательное поле")
      .email("Почта должна быть действительна"),
    password: yup
      .string()
      .required("Обязательное поле")
      .trim()
      .min(8, "Минимум 8 символов"),
    passwordConfirmation: yup
      .string()
      .required("Обязательное поле")
      .oneOf([yup.ref("password")], "Пароли должны совпадать"),
  })
  .required();

export { schema };
