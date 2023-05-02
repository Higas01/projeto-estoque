import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/useAuth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </AuthProvider>
);
