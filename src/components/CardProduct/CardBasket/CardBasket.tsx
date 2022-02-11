import React, {FC} from "react";
import "./style.scss";
import {ICardBasket} from "../../../models/IClothes";
import {useAppDispatch} from "../../../hooks/redux";
import {getBasketDelete, getBasketTotal} from "../../../store/reducers/BasketListSlice";


const CardBasket: FC<ICardBasket> = ({descriptions, sizes, img, price, id, keyId}) => {

    const dispatch = useAppDispatch()

    const onHandledClick = (val: string | number | undefined, price: number) => {
        dispatch(getBasketDelete(val))
        dispatch(getBasketTotal(-price))
    }
    return (
        <>
            <div className={"cardBasket"}>
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
                    <button className={'cardBasket__btn'}
                            onClick={() => onHandledClick(keyId, price)}>{'✖'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardBasket;