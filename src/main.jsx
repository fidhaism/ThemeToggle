import "bulma/css/bulma.min.css";
import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "./ThemeContext";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);