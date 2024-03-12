import React from "react";
import ReactDOM from "react-dom/client";
import AuthProv from "./Provider/AuthProv.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProv>
    <App />
  </AuthProv>
);
