import React from "react";
import {Link, Outlet} from "react-router-dom";
import './style.scss'
import OrdersHuman from "./Orders/OrdersHuman";


const Admin = () => {
    return (<div>
        <div className={'admin'}>
            <Link to={`/admin/delete`} className={'admin__link'}>{'DELETE'}</Link>
            <Link to={`/admin/add`} className={'admin__link'}>{'ADD'}</Link>
            <Link to={`/admin/orders`} className={'admin__link'}>{'ЗАКАЗЫ'}</Link>
        </div>
        <Outlet/>
    </div>)
}

export default Admin