import { createContext } from "react";
interface AuthContextProp {
  isAuth: boolean | null;
  setIsAuth: (c: boolean) => void;
}
const AuthContext = createContext<AuthContextProp>({
  isAuth: null,
} as AuthContextProp);

export { type AuthContextProp, AuthContext };
