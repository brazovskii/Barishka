import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../../models/IBasket";


interface BasketState {
    basket: IBasket[];
    id: number | string;
    keyId: number | string | undefined | Date;
    size: string;
    count: number;
    total: number;
}

const initialState: BasketState = {
    basket: [],
    keyId: '',
    id: '',
    size: '',
    count: 0,
    total: 0
}

export const basketListSlice = createSlice({
    name: 'basketList',
    initialState,
    reducers: {
        getBasket(state, action: PayloadAction<IBasket>) {
            state.basket = [action.payload, ...state.basket]
        },
        getIdBasket(state, action: PayloadAction<number | string>) {
            state.id = action.payload
        },
        getSizeBasket(state, action: PayloadAction<string>) {
            state.size = action.payload
        },
        getBasketCount(state) {
            state.count = state.basket.length
        },
        getBasketDelete(state) {

        }
    },
})
export const {getBasket, getIdBasket, getSizeBasket, getBasketCount, getBasketDelete} = basketListSlice.actions;


export default basketListSlice.reducer;