import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import ClothingCollection from "../components/ClothingCollection/ClothingCollection";
import Clothe from "../components/Clothe/Clothe";
import Admin from "../components/Admin/Admin";
import Delete from "../components/Admin/Delete/Delete";
import OrdersHuman from "../components/Admin/Orders/OrdersHuman";
import AddClothe from "../components/Admin/AddClothe/AddCloths";

export default function App() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}>
                <Route path="/admin/delete" element={<Delete/>}/>
                <Route path="/admin/add" element={<AddClothe/>}/>
                <Route path="/admin/orders" element={<OrdersHuman/>}/>
            </Route>
            <Route path="/" element={<Layout/>}>
                <Route path='girl' element={<ClothingCollection/>}/>
                <Route path="man" element={<ClothingCollection/>}/>
                <Route path="search" element={<Search/>}/>
                <Route
                    path="*"
                    element={
                        <main>
                            <p>Oops page not found, please reload the resource</p>
                        </main>
                    }
                />
            </Route>
            <Route path="/:paramsId/:paramsName" element={<Clothe/>}/>
        </Routes>
    );
}
