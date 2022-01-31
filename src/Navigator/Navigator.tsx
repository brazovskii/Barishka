import React from "react";
import "./style.scss";
import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Basket from "../components/Basket/Basket";
import Photos from "../components/CardProduct/Card/Card";

export default function App() {
    return (
        <Routes >
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path=":human" element={<Photos/>}/>
                <Route path="man" element={<Photos/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="basket" element={<Basket/>}/>
            </Route>
        </Routes>
    );
}
