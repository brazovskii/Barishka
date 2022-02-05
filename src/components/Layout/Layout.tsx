import React from "react";
import "./style.scss";
import {Outlet, Link, useSearchParams} from "react-router-dom";
// import man from "../Man/Man";
import {useAppDispatch} from "../../hooks/redux";
import {getUrlHuman} from "../../store/reducers/UrlSlice";

const Layout = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={"king"}>
            <nav className="nav">
                <div className={'nav__body'}>
                    <Link to={`girl`} className={"btnHeader__human"} onClick={() => {
                    dispatch(getUrlHuman('girl'))
                }}
                >
                    {"Женжинам"}
                </Link>
                    <Link to={`man`} className={"btnHeader__human"} onClick={() => {
                        dispatch(getUrlHuman('man'))
                    }}>
                        {"Мужчинам"}
                    </Link></div>
                <Link to={"/"} className={"btnHeader__barishka"}>
                    {"Barishka        "}
                </Link>

                <Link to={`/basket`} className={"btnHeader__basket"}>
                    {"Basket"}
                </Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;
