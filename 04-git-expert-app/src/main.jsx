import React from "react";
import ReactDOM from "react-dom/client";
import { GiftExpertrApp } from "./GiftExpertrApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* //ayuda con codigo viejo //solo se aplica en desarrollo */}
    <GiftExpertrApp/>
  </React.StrictMode> // el estricto prueba dos veces para ver que le componente
  //funcione bien
);




