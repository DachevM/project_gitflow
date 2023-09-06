import { Navigate } from "react-router-dom";
import React, { lazy } from "react";


const Products = lazy(
  async () => await import("../Components/Pages/Products/Products")
);
const AuthLogin = lazy(
  async () => await import("../Components/Auth/AuthLogin")
);
const Register = lazy(async () => await import("../Components/Auth/Register"));


const privateRoutes = [
  { path: "/products", element: <Products /> },
  { path: "/", element: <Navigate to="/products" /> },
  { path: "*", element: <Navigate to="/products" /> },
];

const publicRoutes = [
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/auth/register", element: <Register /> },
  { path: "*", element: <Navigate to="/auth/login" /> },
];
export { publicRoutes, privateRoutes };
