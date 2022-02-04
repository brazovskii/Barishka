import React from "react";
import Filter from "../Filter/Filter";
import Card from "../CardProduct/Card/Card";
import {useAppSelector} from "../../hooks/redux";
import {useSearchParams} from "react-router-dom";
import "./style.scss";
import {clothesAPI} from "../../services/ClothesService";


const ClothingCollection = () => {
    // const {clothes} = useAppSelector(state => state.collectionReducer)
    let [searchParams] = useSearchParams();
    const {urlHuman} = useAppSelector(state => state.urlReducer)
    const {data: clothes, isLoading} = clothesAPI.useGetClothesQuery("clothes");

    return (
        <>
            <Filter/>
            <div className="main__body">
                {isLoading && <div className={'main__loader'}><img
                    src="https://miro.medium.com/max/2400/1*5ngZiNtGMrp_xmZHxSvJ0g.gif" alt="loader"/></div>}
                {clothes && clothes
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
                                id={invoice.id}
                                key={invoice.id}
                            >
                                {invoice.name}
                            </Card> : '')}
            </div>
        </>
    );
};

export default ClothingCollection;
