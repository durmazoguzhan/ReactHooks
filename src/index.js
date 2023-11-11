import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import YasamDongusu from "./components/yasamdongusu.component";
import StateHook from "./components/statehook.component";
import VeriGetir from "./components/verigetir.component";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container mt-3 ">
      {/* <YasamDongusu /> */}
      {/* <StateHook /> */}
      <VeriGetir />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
