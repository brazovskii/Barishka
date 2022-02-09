import {IBasket} from "./IBasket";

export interface IForm {
    name: string;
    phone: string;
    address: string;
    comments: string;
    total: number;
    basket: IBasket[];
    id?: number;
}

export interface IOrders {
    orders: IForm;
}
