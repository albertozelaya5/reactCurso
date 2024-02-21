import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './index.css'
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* <HelloWorldApp />
    <FirstApp title="123 no" subtitle={31415}/> */}
    <CounterApp value={20} />

  </React.StrictMode>
);
