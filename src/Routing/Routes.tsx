import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import { Provider } from "react-redux";

import { state } from "../RTK/state";

const Products = lazy(
  async () => await import("../Components/Pages/Products/Products")
);
const Clients = lazy(
  async () => await import("../Components/Pages/Clients/Clients")
);
const CategoriesMain = lazy(
  async () => await import("../Components/Pages/Categories/CategoriesMain")
);
const Cities = lazy(
  async () => await import("../Components/Pages/Cities/Cities")
);
const Orders = lazy(
  async () => await import("../Components/Pages/Orders/Orders")
);
const AuthLogin = lazy(
  async () => await import("../Components/Auth/AuthLogin")
);
const Register = lazy(async () => await import("../Components/Auth/Register"));

const privateRoutes = [
  { path: "/products", element: <Products /> },
  { path: "/categories", element: <CategoriesMain /> },
  { path: "/clients", element: <Clients /> },
  {
    path: "/cities",
    element: (
      <Provider store={state}>
        <Cities />{" "}
      </Provider>
    ),
  },
  {
    path: "/orders",
    element: (
      <Provider store={state}>
        <Orders />
      </Provider>
    ),
  },
  { path: "/", element: <Navigate to="/products" /> },
  { path: "*", element: <Navigate to="/products" /> },
];

const publicRoutes = [
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/auth/register", element: <Register /> },
  { path: "*", element: <Navigate to="/auth/login" /> },
];
export { publicRoutes, privateRoutes };
