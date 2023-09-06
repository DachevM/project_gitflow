import React, { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "./Routes";

import { AuthContext } from "../Context/context";

const Routing = () => {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) {
    return (
        <Suspense>
          <Routes>
            {privateRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
    );
  } else {
    return (
      <Suspense >
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
