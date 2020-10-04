import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/router/Router";
import "./styles.scss";
import { StoreContextProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <Router />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
