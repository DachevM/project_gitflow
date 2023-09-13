import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./Routes";

import { AuthContext } from "../Context/context";
import Layout from "../Layout";

const Routing = () => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) {
    return (
      <Layout>
        <Suspense>
          <Routes>
            {privateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    );
  } else {
    return (
      <Suspense>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    );
  }
};

export default Routing;
