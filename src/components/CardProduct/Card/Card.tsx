import React, {FC} from "react";
import "./style.scss";
import {NavLink} from "react-router-dom";
import {ICard} from "../../../models/ICard";


const Card: FC<ICard> = ({descriptions, category, img, price, id}) => {
    return (
        <>
            <div className={"card"}>
                <NavLink to={`/${id}/${category}`} className={'card__link'}>
                    <div className={"card__body"}>
                        <img
                            className={"card__picture"}
                            src={img}
                            alt={"clothes"}
                        />
                        <p className={"card__description"}>{descriptions}</p>
                        <p className={"card__price"}>{`${price}РУБ`}</p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Card;
