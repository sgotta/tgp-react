import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";

const container = document.getElementById("root");

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
