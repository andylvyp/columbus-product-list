import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import "./index.scss";

const container = document.getElementById("root");
ReactDOMClient.createRoot(container!).render(
    <App />
);
