import React, { FC, useState } from "react";
import "./style.scss";
import { Outlet, Link } from "react-router-dom";
import { ILink } from "../../models/ILink";

const links: ILink[] = [
  { id: 1001, url: "/", name: "Home" },
  { id: 1002, url: "/man", name: "Man" },
  { id: 1003, url: "/girl", name: "Girl" },
  { id: 1004, url: "/basket", name: "🛒| 0" },
];

const Layout: FC = () => {
  return (
    <div className={"head"}>
      <div className="nav">
        {links.map((el) => {
          return (
            <Link to={el.url} key={el.id} className={"btnHeader"}>
              {el.name}
            </Link>
          );
        })}
        <input
          type="text"
          className="inputSearch"
          placeholder=" Search..."
          // onChange={() => {
          //   onInputSearch();
          // }}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
