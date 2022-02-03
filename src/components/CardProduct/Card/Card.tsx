import React, {FC, useEffect} from "react";
import "./style.scss";
import {Outlet} from "react-router-dom";
import Filter from "../../Filter/Filter";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {collectionSlice, fetchCollection} from "../../../store/reducers/CollectionSlice";
import {ICard} from "../../../models/ICard";


const Card: FC<ICard> = ({descriptions, img, price}) => {
    return (
        <>
            <div className={"card"}>
                <div className={"card__body"}>
                    <p className={"card__description"}>{descriptions}</p>
                    <img
                        className={"card__picture"}
                        src={img}
                        alt={"clothes"}
                    />
                </div>
                <div className={"card__section"}>
                    <div className={"card__section"}>
                        <button className={"card__btn--size"}>M</button>
                        <button className={"card__btn--size"}>S</button>
                        <button className={"card__btn--size"}>L</button>
                        <button className={"card__btn--size"}>XL</button>
                    </div>
                    <p className={"card__price"}>{`${price}p`}</p>
                </div>
                <button className="card__button--btn">Купить</button>
            </div>
            <Outlet/>
        </>
    );
};

export default Card;
