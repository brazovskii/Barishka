import React from "react";
import "./style.scss";
import {Outlet, Link, useSearchParams} from "react-router-dom";
import man from "../Man/Man";
import {useAppDispatch} from "../../hooks/redux";
import {getUrlHuman} from "../../store/reducers/UrlSlice";

const Layout= () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch()

    return (
        <div className={"head"}>
            <nav className="nav">
                <Link to={"/"} className={"btnHeader"}>
                    {"Barishka"}
                </Link>
                <Link to={`girl`} className={"btnHeader"} onClick={() => {
                    dispatch(getUrlHuman('girl'))
                }}
                >
                    {"Girl"}
                </Link>
                <Link to={`man`} className={"btnHeader"} onClick={() => {
                    dispatch(getUrlHuman('man'))
                }}>
                    {"Man"}
                </Link>
                <Link to={`search`} className={"btnHeader"}>
                    <input
                        className="inputSearch"
                        placeholder=" Search..."
                        value={searchParams.get('description') || ''}
                        onChange={event => {
                            let description = event.target.value;
                            if (description) {
                                setSearchParams({description});
                            } else {
                                setSearchParams({})
                            }
                        }}
                    />
                </Link>
                <Link to={`/basket`} className={"btnHeader"}>
                    {"Basket"}
                </Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;
