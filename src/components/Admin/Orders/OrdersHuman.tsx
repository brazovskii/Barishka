import React from "react";
import {clothesAPI} from "../../../services/ClothesService";
import './style.scss'


const OrdersHuman = () => {
    const {data: orders} = clothesAPI.useGetClothesQuery("orders");
    return (<div className={'orders__body'}>
        {orders && orders.map(el =>
            <div key={el.id}>
                <h1>{el.name}</h1>
                <h2>{el.phone}</h2>
                <h3>{el.address}</h3>
                <h4>{JSON.stringify(el.basket)}</h4>
            </div>
        )}
        {/*<Outlet/>*/}
    </div>)
}

export default OrdersHuman;