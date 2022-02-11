import React from "react";
import {Link, Outlet} from "react-router-dom";
import {clothesAPI} from "../../../services/ClothesService";
import Card from "../../CardProduct/Card/Card";
import './style.scss'


const Delete = () => {
    const {data: clothes} = clothesAPI.useGetClothesQuery("clothes");
    const [deleteClothe, {}] = clothesAPI.useDeleteClotheMutation();
    const onHandled = (id: number) => {
        deleteClothe(id)
    }


    return (<div className={'delete'}>
        {clothes && clothes.map(invoice =>
            <div key={`${invoice.id}sad`}>
                <button onClick={() => onHandled(invoice.id)}>Delete</button>
                <Card
                    descriptions={invoice.descriptions}
                    category={invoice.category}
                    img={invoice.img}
                    price={invoice.price}
                    id={invoice.id}
                    key={invoice.id}
                >
                </Card>
            </div>
        )}
        <Outlet/>
    </div>)
}

export default Delete