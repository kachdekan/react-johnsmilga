import React from "react";
import ReactDOM from "react-dom";
import "./projects/12-sidebar-modal/setup/index.css";
import App from "./App";
import { AppProvider } from "./projects/12-sidebar-modal/setup/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
