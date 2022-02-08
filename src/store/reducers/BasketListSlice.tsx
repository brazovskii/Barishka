import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BasketState, IBasket} from "../../models/IBasket";


const initialState: BasketState = {
    basket: [],
    keyId: 0,
    id: '',
    size: 'S',
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
        getBasketDelete(state, action: PayloadAction<IBasket | string | number | undefined>) {
            state.basket = state.basket.filter(el => el.keyId !== action.payload)
            state.count = state.count - 1

        },
        getBasketTotal(state, action: PayloadAction<number>) {
            state.total += action.payload
        }
    },
})
export const {
    getBasket,
    getIdBasket,
    getSizeBasket,
    getBasketCount,
    getBasketDelete,
    getBasketTotal
} = basketListSlice.actions;


export default basketListSlice.reducer;