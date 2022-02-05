import React, {FC} from "react";
import "./style.scss";
import {Link, NavLink, Outlet, useSearchParams} from "react-router-dom";
import {ILink, IUrl} from "../../models/ILink";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUrlHuman, getUrParams} from "../../store/reducers/UrlSlice";
import {getSearchValue} from "../../store/reducers/SearchSlice";

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
    let [searchParams, setSearchParams] = useSearchParams();
    const {value} = useAppSelector(state => state.searchReducer)
    return (
        <div className={'filter'}>
            <div className="filter__body">
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
            <NavLink to={`?description=${value}`}><input
                className="inputSearch"
                placeholder=" Search..."
                type={'input'}
                value={searchParams.get(`description`) || ''}
                onChange={event => {
                    dispatch(getSearchValue(value))

                    let description = event.target.value;
                    if (description) {
                        setSearchParams({description});
                    } else {
                        setSearchParams({})
                    }
                }}
            /></NavLink>

            <Outlet/>
        </div>
    );
};

export default Filter;
