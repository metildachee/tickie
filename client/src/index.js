import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStoreProvider from "./components/GlobalStoreProvider";
ReactDOM.render(
  <GlobalStoreProvider>
    <App />
  </GlobalStoreProvider>,
  document.getElementById("root")
);
