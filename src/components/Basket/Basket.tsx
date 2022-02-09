import React, {useEffect, useState} from "react";
import "./style.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {clothesAPI} from "../../services/ClothesService";
import {IClothes} from "../../models/IClothes";
import CardBasket from "../CardProduct/CardBasket/CardBasket";
import {getBasketCount} from "../../store/reducers/BasketListSlice";
import {getModal} from "../../store/reducers/UrlSlice";
import RegistrationOrder from "./RegistrationOrder/RegistrationOrder";

const Basket = () => {
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    const dispatch = useAppDispatch()
    const {basket, count, total} = useAppSelector(state => state.basketList);
    const {modal} = useAppSelector(state => state.url)

    useEffect(() => {
        dispatch(getBasketCount())
    })

    const getClotheById = (id: number | string, clothes: IClothes[]): IClothes | undefined => {
        return clothes.find(value => value.id === id)
    }

    return (
        <>   {
            !modal ? <div className={'basket'}>
                <p className={'basket__p'}>{`Моя Корзина (${count})`}</p>
                {
                    clothes && basket.filter(elem => {
                        let clotheElem = getClotheById(elem.id, clothes);
                        return clotheElem !== undefined;

                    }).map(elem => {
                        let clotheElem = getClotheById(elem.id, clothes);
                        if (clotheElem !== undefined) {
                            return <CardBasket id={clotheElem.id} price={clotheElem.price} img={clotheElem.img}
                                               descriptions={clotheElem.descriptions} sizes={elem.size}
                                               key={elem.keyId} keyId={elem.keyId}/>
                        }
                        return null;
                    })
                }
                <div className={'basket__footer'}>
                    <div className={'basket__footer__header'}>
                        <p className={'basket__total'}>Итого:</p>
                        <p className={'basket__sum'}>{`${total} РУБ.`}</p>
                    </div>
                    <button className={'basket__footer__btn'} onClick={() => dispatch(getModal())}>ОФОРМИТЬ ЗАКАЗ
                    </button>
                </div>
            </div> : <RegistrationOrder/>
        }
        </>);
};


export default Basket;
