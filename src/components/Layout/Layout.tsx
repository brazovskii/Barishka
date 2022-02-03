import React, {FC, useEffect} from "react";
import "./style.scss";
import {Outlet, Link, useSearchParams} from "react-router-dom";

const Layout: FC = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className={"head"}>
            <nav className="nav">
                <Link to={"/"} className={"btnHeader"}>
                    {"Barishka"}
                </Link>
                <Link to={`/?name=girl`} className={"btnHeader"}
                >
                    {"Girl"}
                </Link>
                <Link to={`/?name=man`} className={"btnHeader"}>
                    {"Man"}
                </Link>
                <Link to={`/?name=girl&description=`} className={"btnHeader"}>
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
