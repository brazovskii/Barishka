import React, {FC, useEffect} from "react";
import "./style.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCollection} from "../../store/reducers/CollectionSlice";
import {useSearchParams} from "react-router-dom";
import Filter from "../Filter/Filter";
import Card from "../CardProduct/Card/Card";

const Search: FC = () => {
    const {clothes} = useAppSelector(state => state.collectionReducer)
    let [searchParams] = useSearchParams();
    return (
        <>
                <div className="main__body">
                    {clothes
                        .filter(clothe => {
                            let filterDescription = searchParams.get("description") ?? '';
                            if (!filterDescription) return true;
                            let description = clothe.descriptions.toLowerCase();
                            return description.toLowerCase().includes(filterDescription.toLowerCase());
                        })
                        .map(invoice =>
                            <Card
                                descriptions={invoice.descriptions}
                                img={invoice.img}
                                price={invoice.price}
                                key={invoice.id}
                            >
                                {invoice.name}
                            </Card>)}
                </div>
        </>
    );
};

export default Search;
