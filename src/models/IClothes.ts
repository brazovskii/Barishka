export interface IClothes {
    id: number;
    price: number;
    img: string;
    descriptions: string;
    name: string;
    category: string;
    size: string[];
    keyId: string | number | undefined;
}

export interface ICardBasket {
    id: number | string;
    price: number;
    img: string;
    descriptions: string;
    sizes: number | string | string[] | undefined;
    keyId?: string | number | undefined;
}