import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {clothesAPI} from "../../services/ClothesService";
import Card from "../CardProduct/Card/Card";

// interface IDcard {
//     idCard: number;
// }

const Clothe: FC = () => {
    const params = useParams();
    let idCard = Number(params.paramsId);
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");

    return <>
        <div className="main__body">{clothes && clothes.map(invoice =>
            invoice.id === idCard ?
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
};

export default Clothe;