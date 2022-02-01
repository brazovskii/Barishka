import React from "react";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Basket from "../components/Basket/Basket";
import Photos from "../components/CardProduct/Card/Card";
import Privet from "../components/Privet/Privet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="girl" element={<Photos />}>
          <Route path=":filter" element={<Privet />} />
        </Route>
        <Route path="man" element={<Photos />}>
          <Route path=":filter" element={<Privet />} />
        </Route>
        <Route path="search" element={<Search />} />
        <Route path="basket" element={<Basket />} />
        <Route
          path="*"
          element={
            <main>
              <p>Oops page not found, please reload the resource</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
