import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("chat-theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
