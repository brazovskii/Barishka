import React, {useState} from "react";
import "./style.scss";
import {Link, Outlet} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {getUrlHuman} from "../../store/reducers/UrlSlice";
import BasketMadal from "../Basket/BasketMadol/BasketMadal";
import Basket from "../Basket/Basket";

const Layout = () => {
    const [modalActive, setModalActive] = useState(false)
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
                <span className={"btnHeader__barishka"}>
                    {"Barishka"}
                </span>
                <button onClick={() => setModalActive(true)}>Nodal</button>
                <BasketMadal active={modalActive} setActive={setModalActive}><Basket/></BasketMadal>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;
