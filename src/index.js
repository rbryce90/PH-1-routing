import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as H } from "react-router-dom";
import "./index.css";
import App from "./components/App";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <H>
        <App />
    </H>, 
    document.getElementById("root")
);
// registerServiceWorker();
