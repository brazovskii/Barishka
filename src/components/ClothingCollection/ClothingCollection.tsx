import React, {FC, useEffect} from "react";
import Filter from "../Filter/Filter";
import Card from "../CardProduct/Card/Card";
import {useAppSelector} from "../../hooks/redux";
import {useSearchParams} from "react-router-dom";
import "./style.scss";


const ClothingCollection = () => {
    const {clothes} = useAppSelector(state => state.collectionReducer)
    let [searchParams] = useSearchParams();
    const {urlHuman} = useAppSelector(state => state.urlReducer)
    return (
        <>
            <Filter/>
                <div className="main__body">
                    {clothes
                        .filter(clothe => {
                            let filterCategory = searchParams.get("category") ?? '';
                            if (!filterCategory) return true;
                            let category = clothe.category.toLowerCase();
                            return category.toLowerCase().includes(filterCategory.toLowerCase());
                        })
                        .map(invoice =>
                            invoice.name === urlHuman ?
                                <Card
                                    descriptions={invoice.descriptions}
                                    img={invoice.img}
                                    price={invoice.price}
                                    key={invoice.id}
                                >
                                    {invoice.name}
                                </Card> : '')}
                </div>
        </>
    );
};

export default ClothingCollection;
