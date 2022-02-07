import React, {FC, useEffect} from "react";
import "./style.scss";
import {ICardBasket} from "../../../models/IClothes";
import {useAppDispatch} from "../../../hooks/redux";
import {getBasketCount, getBasketDelete} from "../../../store/reducers/BasketListSlice";


const CardBasket: FC<ICardBasket> = ({descriptions, sizes, img, price, id, keyId}) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getBasketCount())
    }, [id, getBasketCount])
    return (
        <>
            <div className={"cardBasket"} >
                <div className={"cardBasket__body"}>
                    <img
                        className={"cardBasket__picture"}
                        src={img}
                        alt={`${id}`}
                    />
                    <div className={'cardBasket__description'}>
                        <p className={"cardBasket__price"}>{`${price}РУБ`}</p>
                        <p className={"cardBasket__description"}>{descriptions}</p>
                        <p className={"cardBasket__size"}>{`${sizes}`}</p>
                    </div>
                    {/*<button className={'cardBasket__btn'}*/}
                    {/*        onClick={() => dispatch(getBasketDelete(keyId))}>{'✖'}*/}
                    {/*</button>*/}
                </div>
            </div>
            {/*<Outlet/>*/}
        </>
    );
};

export default CardBasket;