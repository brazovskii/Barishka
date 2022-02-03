import React, {FC} from "react";
import "./style.scss";
import {Link, NavLink, Outlet} from "react-router-dom";
import {ILink, IUrl} from "../../models/ILink";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUrParams} from "../../store/reducers/UrlSlice";

const MASSLINK: ILink[] = [
    {id: 100, url: "outerwear", name: "Верхняя одежда"},
    {id: 101, url: "hudi", name: "Худи"},
    {id: 102, url: "jeans", name: "Джинсы"},
    {id: 105, url: "tracksuits", name: "Спортивные костюмы"},
    {id: 103, url: "futbolki", name: "Футболки"},
    {id: 104, url: "shoes", name: "Обувь"},
];


const Filter = () => {
    const dispatch = useAppDispatch()
    const {urlHuman} = useAppSelector(state => state.urlReducer)
    return (
        <>
            <div className="filter">
                {MASSLINK.map((el) => {
                    return (
                        <NavLink to={`?category=${el.url}`} key={el.id} className={'filter__link'}
                                 onClick={() => {
                                     dispatch(getUrParams(el.url))
                                 }}>
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
