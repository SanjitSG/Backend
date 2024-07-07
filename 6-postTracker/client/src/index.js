import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// bootstrap css and js
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
