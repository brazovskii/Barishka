import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../../models/IBasket";


interface BasketState {
    basket: IBasket[];
}

const initialState: BasketState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        getBasket(state, action: PayloadAction<IBasket[]>) {
            state.basket = action.payload
        }
    },
})
export const {getBasket} = basketSlice.actions;

export default basketSlice.reducer;