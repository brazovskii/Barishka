import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {clothesAPI} from "../../services/ClothesService";
import Card from "../CardProduct/Card/Card";
import './style.scss'
import {useAppSelector} from "../../hooks/redux";


const Clothe = () => {
    const sales = (val: number): number => val * 0.2 + val
    const {value} = useAppSelector(state => state.searchReducer)
    const params = useParams();
    let idCard = Number(params.paramsId);
    let itCategory = params.paramsName;
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    const {urlParams} = useAppSelector(state => state.urlReducer);

    return( <div className={''}>
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

                            <div className={"picture__section--btn"}>
                                <button className={"card__btn--size"}>M</button>
                                <button className={"card__btn--size"}>S</button>
                                <button className={"card__btn--size"}>L</button>
                                <button className={"card__btn--size"}>XL</button>
                            </div>
                        </div>
                        <button className="card__button--btn">Добавить в корзину</button>
                    </div>
                </div> : '')}
        </div>
        <p className={'recommendation'}>Рекомендации для вас</p>
        <div className={"main__body"}>
            {clothes && clothes.map(invoice => invoice.category ===  itCategory ?
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