import React, {useEffect, useState} from "react";
import "./style.scss";
import {Link, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUrlHuman} from "../../store/reducers/UrlSlice";
import Basket from "../Basket/Basket";
import {getBasketCount} from "../../store/reducers/BasketListSlice";
import ModalBasket from "../ModalWindow/ModalBasket";

const Layout = () => {
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useAppDispatch()
    const {count} = useAppSelector(state => state.basketList);

    useEffect(() => {
        dispatch(getBasketCount())
    })

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
                <button onClick={() => setModalActive(true)} className={'basket__btn'}><img
                    src={'https://res.cloudinary.com/duzecrl3s/image/upload/v1644339062/basket_zewdf4.png'}
                    className={'basket__img'}/><span className={count > 0 ? 'countOne' : 'countZero'}>{count}</span>
                </button>
                <ModalBasket active={modalActive} setActive={setModalActive}><Basket/></ModalBasket>

            </nav>
            <Outlet/>
        </div>
    );
};

export default Layout;
