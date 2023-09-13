import { Navigate } from "react-router-dom";
import React, { lazy } from "react";

const Products = lazy(
  async () => await import("../Components/Pages/Products/Products")
);
const Clients = lazy(
  async () => await import("../Components/Pages/Clients/Clients")
);
const CategoriesMain = lazy(
  async () => await import("../Components/Pages/Categories/CategoriesMain")
);
const AuthLogin = lazy(
  async () => await import("../Components/Auth/AuthLogin")
);
const Register = lazy(async () => await import("../Components/Auth/Register"));

const privateRoutes = [
  { path: "/products", element: <Products /> },
  { path: "/categories", element: <CategoriesMain /> },
  { path: "/clients", element: <Clients /> },
  { path: "/", element: <Navigate to="/products" /> },
  { path: "*", element: <Navigate to="/products" /> },
];

const publicRoutes = [
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/auth/register", element: <Register /> },
  { path: "*", element: <Navigate to="/auth/login" /> },
];
export { publicRoutes, privateRoutes };
