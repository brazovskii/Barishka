import React, {useState, useEffect, FC} from "react";
import './style.scss'
import {ICollection} from "../../../models/ICollection";


const Photos = () => {
    const [photos, setPhotos] = useState<ICollection[]>([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const response = await fetch(`http://localhost:5000/girl`);
        const data = await response.json();
        setPhotos(data);
    };

    return (
        <div className={"card"}>
            {photos.map((item) => {
                return (
                    <div className={"card__header"} key={item.id}>
                        <div className={'card__body'}>
                            <p className={'card__description'}>{item.descriptions}</p>
                            <img className={"card__picture"} src={item.img} alt={"clothes"}></img>
                        </div>
                        <div className={'card__section'}>
                            <div className={'card__section'}>
                                <button className={'card__btn--size'}>M</button>
                                <button className={'card__btn--size'}>S</button>
                                <button className={'card__btn--size'}>L</button>
                                <button className={'card__btn--size'}>XL</button>
                            </div>
                            <p className={'card__price'}>{`${item.price}p`}</p>
                        </div>
                        <button
                            className="card__button--btn"
                        >
                            Купить
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Photos;
