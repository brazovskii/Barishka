import {IBasket} from "./IBasket";

export interface IOrders {
    total: number;
    name: string;
    phone: number | string;
    address: number | string;
    comments: string;
    basket: IBasket[]
}