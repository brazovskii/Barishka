import React, { FC } from "react";
import "./style.scss";
import { Outlet, Link } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className={"head"}>
      <nav className="nav">
        <Link to={"/"} className={"btnHeader"}>
          {"Home"}
        </Link>
        <Link to={`/girl`} className={"btnHeader"}>
          {"Girl"}
        </Link>
        <Link to={`/man`} className={"btnHeader"}>
          {"Man"}
        </Link>
        <input
          type="text"
          className="inputSearch"
          placeholder=" Search..."
          // onChange={() => {
          //   onInputSearch();
          // }}
        />
        <Link to={`/basket`} className={"btnHeader"}>
          {"Basket"}
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
