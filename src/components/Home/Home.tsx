import React, {FC, useEffect} from "react";
import "./style.scss";
import Card from "../CardProduct/Card/Card";
import {fetchCollection} from "../../store/reducers/CollectionSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Filter from "../Filter/Filter";
import {useSearchParams} from "react-router-dom";
import {IClothes} from "../../models/IClothes";
import ClothingCollection from "../ClothingCollection/ClothingCollection";

const Home = () => {

    return (
        <>
            <ClothingCollection/>
        </>
    );
};

export default Home;
