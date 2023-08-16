import { DarkModeProvider } from "./context/darkmode";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
);
