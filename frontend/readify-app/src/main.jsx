import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import appStore from "./Store/appStore.js"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={appStore}>
      <ToastContainer/>
      <App />
    </Provider>
  </BrowserRouter>
);
