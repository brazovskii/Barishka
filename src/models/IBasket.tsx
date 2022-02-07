export interface IBasket {
    id: number | string;
    keyId: string | number | undefined;
    size: string[];
}

export interface BasketState {
    basket: IBasket[];
    id: number | string;
    size: string[];
}
