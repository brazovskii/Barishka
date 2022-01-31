import React from "react";
import ReactDOM from "react-dom";
import {Normalize} from "styled-normalize";
import Navigator from "../src/Navigator/Navigator";
// import {Provider} from "react-redux";
// import { store } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Normalize/>
        <Navigator/>
    </React.StrictMode>,
    document.getElementById("root")
);
