import React from "react";
import ReactDOM from "react-dom";
import {Normalize} from "styled-normalize";
import {BrowserRouter} from "react-router-dom";
import App from "../src/Navigator/Navigator";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Normalize/>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
