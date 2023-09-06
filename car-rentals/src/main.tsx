import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ToastProvider from "./providers/ToastProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <div className="overlay">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
