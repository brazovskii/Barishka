import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {clothesAPI} from "../../services/ClothesService";
import Card from "../CardProduct/Card/Card";
import {IClothes} from "../../models/IClothes";
import './style.scss'
import {useAppSelector} from "../../hooks/redux";

// interface IDcard {
//     idCard: number;
// }

const Clothe = () => {
    const params = useParams();
    let idCard = Number(params.paramsId);
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    const {urlParams} = useAppSelector(state => state.urlReducer)
    return <div className={''}>
        <div className={'picture'}> {clothes && clothes.map(invoice =>
            invoice.id === idCard ?
                <img src={invoice.img} alt="" className={'picture__body'} key={invoice.id}/> : '')}
        </div>
        <p className={'recommendation'}>Рекомендации для вас</p>
        <div className={"main__body"}>
            {clothes && clothes.map(invoice => invoice.category === urlParams ?
                <Card
                    descriptions={invoice.descriptions}
                    img={invoice.img}
                    price={invoice.price}
                    id={invoice.id}
                    key={invoice.id}
                >
                    {invoice.name}
                </Card> : '')}
        </div>
    </div>

};

export default Clothe;