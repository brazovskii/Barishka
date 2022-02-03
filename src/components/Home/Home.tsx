import React, {FC, useEffect} from "react";
import "./style.scss";
import Card from "../CardProduct/Card/Card";
import {fetchCollection} from "../../store/reducers/CollectionSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Filter from "../Filter/Filter";
import {useSearchParams} from "react-router-dom";
import {IClothes} from "../../models/IClothes";

const Home = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCollection())
    }, [])
    const {clothes} = useAppSelector(state => state.collectionReducer)

    return (
        <>

        </>
    );
};

export default Home;
