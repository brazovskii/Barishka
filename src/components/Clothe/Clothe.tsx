import React from "react";
import {useParams} from "react-router-dom";
import {clothesAPI} from "../../services/ClothesService";
import Card from "../CardProduct/Card/Card";
import './style.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getBasket, getSizeBasket} from "../../store/reducers/BasketListSlice";


const Clothe = () => {
    const keyBasket = +new Date()
    const dispatch = useAppDispatch()
    const sales = (val: number): number => val * 0.2 + val
    const params = useParams();
    const idCard = Number(params.paramsId);
    let itCategory = params.paramsName;
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    const {size} = useAppSelector(state => state.basketList);
    return (<div className={''}>
        <div className={'picture'}> {clothes && clothes.map(invoice =>
            invoice.id === idCard ?
                <div className={'picture__header'} key={invoice.id}>
                    <div><img src={invoice.img} alt={`${itCategory}`} className={'picture__body'} key={invoice.id}/>
                    </div>
                    <div className={'params'}>
                        <div className={"picture__section"}>
                            <p className={"picture__description"}>{`${invoice.descriptions}`}</p>
                            <div className={'picture__check'}>
                                <span className={"picture__price"}>{`${invoice.price}PUБ`}</span>
                                <span
                                    className={'picture__sale'}>{`.${sales(invoice.price)}РУБ  `}</span>
                                <span className={'sale'}>{`-20%`}</span></div>
                            <div className={"picture__section--btn"}>{invoice.size.map(sizeClothe => {
                                return (<button className={"card__btn--size"} key={sizeClothe}
                                                onClick={() => dispatch(getSizeBasket(sizeClothe))}>{sizeClothe}</button>)
                            })}
                            </div>
                        </div>
                        <button className="card__button--btn" onClick={() => dispatch(getBasket({
                            id: invoice.id,
                            keyId: keyBasket,
                            size: [size]
                        }))}>Добавить в
                            корзину
                        </button>
                    </div>
                </div> : '')}
        </div>
        <p className={'recommendation'}>Рекомендации для вас</p>
        <div className={"main__body"}>
            {clothes && clothes.map(invoice => invoice.category === itCategory ?
                <Card
                    descriptions={invoice.descriptions}
                    category={invoice.category}
                    img={invoice.img}
                    price={invoice.price}
                    id={invoice.id}
                    key={invoice.id}
                >
                    {invoice.name}
                </Card> : '')}
        </div>
    </div>)

};

export default Clothe;