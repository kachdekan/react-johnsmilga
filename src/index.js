import React from "react";
import ReactDOM from "react-dom";
import "./projects/14-shopping-cart/setup//index.css";
import App from "./App";
import { AppProvider } from "./projects/14-shopping-cart/setup/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
