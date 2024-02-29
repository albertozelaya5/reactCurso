import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import { SimpleForm } from "./01-useEffect/SimpleForm";
import { FormWithCustomHook } from "./01-useEffect/FormWithCustomHook"; */
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memos/Memorize";
import { MemorizeHook } from "./06-memos/MemorizeHook";
//import { CounterApp } from "./01-useState/CounterApp";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { HooksApp } from './HooksApp.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    < MemorizeHook/>
  //</React.StrictMode>
);
