import React, {FC} from "react";
import "./style.scss";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Collection from "../components/Сollection/Сollection";
import Location from "../components/Location/Location";
import Search from "../components/Search/Search";
import Basket from "../components/Basket/Basket";
// import Photos from "../components/CardProduct/Card/Card";

export default function App() {
    return (
        <Router>
            <div className="header">
                <Switch>
                    <Route path="/">
                        <Main/>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/collection">
                            <Collection/>
                            <Route path="/collection/man"></Route>
                            <Route path="/collection/girl"></Route>
                        </Route>
                        <Route path="/location">
                            <Location/>
                        </Route>
                        <Route path="/search">
                            <Search/>
                        </Route>
                        <Route path="/basket">
                            <Basket/>
                        </Route>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
