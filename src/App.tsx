import React, { useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Routing from "./Routing/Routing";
import { AuthContext } from "./Context/context";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const providerValue = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth]
  );
  return (
    <div className="App">
      <AuthContext.Provider value={providerValue}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
