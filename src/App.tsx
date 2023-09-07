import React, { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routing from "./Routing/Routing";
import { AuthContext } from "./Context/context";
import { store } from "./Redux/store";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(true);
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
          <Provider store={store}>
            <Routing />
          </Provider>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
