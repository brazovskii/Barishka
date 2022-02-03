import React, {FC, useEffect} from "react";
import "./style.scss";
import Card from "../CardProduct/Card/Card";
import {fetchCollection} from "../../store/reducers/CollectionSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Filter from "../Filter/Filter";
import {useSearchParams} from "react-router-dom";
import {ICollection} from "../../models/ICollection";

const Home: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCollection())
    }, [])
    const {clothes} = useAppSelector(state => state.collectionReducer)
    let [searchParams, setSearchParams] = useSearchParams();
    // useEffect(() => {
    //     if (filter) {
    //         setSearchParams({filter});
    //     } else {
    //         setSearchParams({});
    //     }
    // }, [])
    return (
        <>
            <Filter />
            <div className="card">
                {clothes
                    .filter(clothe => {
                        let filterCategory = searchParams.get("category") ?? ''; // girl/man
                        let filterName = searchParams.get("name") ?? ''; // girl/man
                        if (!filterName && !filterCategory) return true;
                        let name = clothe.name.toLowerCase(); // man/girl
                        let category = clothe.category.toLowerCase();
                        return name.startsWith(filterName.toLowerCase()) && category.toLowerCase().includes(filterCategory.toLowerCase());
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
            </div>
        </>
    );
};

export default Home;
