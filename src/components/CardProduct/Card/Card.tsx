import React, {FC, useEffect} from "react";
import "./style.scss";
import {NavLink, Outlet} from "react-router-dom";
import Filter from "../../Filter/Filter";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {collectionSlice, fetchCollection} from "../../../store/reducers/CollectionSlice";
import {ICard} from "../../../models/ICard";


const Card: FC<ICard> = ({descriptions, img, price, id}) => {
    return (
        <>
            <div className={"card"}>
                <NavLink to={`/${id}`} className={'card__link'}>
                    <div className={"card__body"}>
                        <img
                            className={"card__picture"}
                            src={img}
                            alt={"clothes"}
                        />
                        <p className={"card__description"}>{descriptions}</p>
                        <p className={"card__price"}>{`${price}РУБ`}</p>
                    </div>
                </NavLink>
            </div>
            {/*<Outlet/>*/}
        </>
    );
};

export default Card;
