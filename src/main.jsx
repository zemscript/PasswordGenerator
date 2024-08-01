import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalize.css";
import "./index.css";
import GlobalStyles from "./global-styles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <App></App>
  </React.StrictMode>,
);
