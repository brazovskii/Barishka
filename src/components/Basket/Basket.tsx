import React from "react";
import "./style.scss";
import {useAppSelector} from "../../hooks/redux";
import {clothesAPI} from "../../services/ClothesService";
import {IClothes} from "../../models/IClothes";
import CardBasket from "../CardProduct/CardBasket/CardBasket";


const Basket = () => {
    const {basket, count} = useAppSelector(state => state.basketList);
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");

    // let temporaryIdToSize = new Map<number | string, string[]>();

    let array: IClothes[] = [];

    return (
        <div className={'basket'}>
            <p className={'basket__p'}>{`Моя Корзина (${count})`}</p>
            {/*{clothes && clothes.filter((elClothe) => {*/}
            {/*    return basket.some(elBasket => {*/}
            {/*            temporaryIdToSize.set(elBasket.id, elBasket.size);*/}
            {/*            return elClothe.id === elBasket.id*/}
            {/*        }*/}
            {/*    )*/}
            {/*}).map(el => <CardBasket id={el.id} key={el.keyId} price={el.price} img={el.img}*/}
            {/*                         descriptions={el.descriptions}*/}
            {/*                         sizes={temporaryIdToSize.get(el.id)} keyId={el.keyId}/>*/}
            {/*)}*/}
            {
                clothes && basket.forEach(elem => {
                    let clotheElem = getClotheById(elem.id, clothes);
                    console.dir(`clothe elem ${clotheElem?.size}`);
                    console.dir(`elem ${elem?.id}`);
                    console.dir(`elem ${elem?.keyId}`);
                    console.dir(`elem ${elem?.size}`);
                    if (clotheElem !== undefined) {
                        let copyElem = clotheElem;
                        copyElem.size = elem.size;
                        array.push(copyElem);
                    }
                }) && array.map(elem => <CardBasket id={elem.keyId} price={elem.price} img={elem.img}
                                                    descriptions={elem.descriptions} sizes={elem.size}
                                                    keyId={elem.keyId}/>)
            }
            <div className={'basket__footer'}>
                <div className={'basket__footer__header'}>
                    <p className={'basket__total'}>Итого:</p>
                    <p className={'basket__sum'}>10231 РУБ.</p>
                </div>
                <button className={'basket__footer__btn'}>ОФОРМИТЬ ЗАКАЗ</button>
            </div>
        </div>
    );
};

function getClotheById(id: number | string, clothes: IClothes[]): IClothes | undefined {
    return clothes.find(value => value.id === id)
}

export default Basket;
