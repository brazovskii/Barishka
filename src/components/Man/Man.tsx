import React, {FC, useEffect} from "react";
import Filter from "../Filter/Filter";
import {IUrl} from "../../models/ILink";
import Card from "../CardProduct/Card/Card";
import {useAppSelector} from "../../hooks/redux";
import {
    NavLink,
    Outlet,
    useSearchParams
} from "react-router-dom";
import {fetchCollection} from "../../store/reducers/CollectionSlice";

const filter: string = 'man';

const Man: FC<IUrl> = () => {
    const {clothes} = useAppSelector(state => state.collectionReducer)
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if (filter) {
            setSearchParams({filter});
        } else {
            setSearchParams({});
        }
    }, [])
    return (
        <>
            <Filter/>
            {clothes
                .filter(invoice => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map(invoice => (
                    <Card
                        descriptions={invoice.descriptions}
                        img={invoice.img}
                        price={invoice.price}
                        key={invoice.id}
                    >
                        {invoice.name}
                    </Card>))}
        </>
    );
};

export default Man;
