import React, {FC} from "react";
import "./style.scss";
import {Link, NavLink, Outlet} from "react-router-dom";
import {ILink, IUrl} from "../../models/ILink";

const MASSLINK: ILink[] = [
    {id: 100, url: "outerwear", name: "Верхняя одежда"},
    {id: 101, url: "hudi", name: "Худи"},
    {id: 102, url: "trousers", name: "Брюки"},
    {id: 103, url: "futbolki", name: "Футболки"},
    {id: 104, url: "sneakers", name: "Кросовки"},
    {id: 105, url: "accessories", name: "Аксессуары"},
];


const Filter = () => {
    return (
        <>
            <div className="filter">
                {MASSLINK.map((el) => {
                    return (
                        <NavLink to={`/?name=girl&category=${el.url}`} key={el.id} className={'filter__link'}>
                            {el.name}
                        </NavLink>
                    );
                })}
            </div>
            <Outlet/>
        </>
    );
};

export default Filter;
