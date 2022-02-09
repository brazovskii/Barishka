import {IClothes} from "../../models/IClothes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CardState {
    clothes: IClothes[];
    isLoading: boolean;
    error: string;
}

const initialState: CardState = {
    clothes: [],
    isLoading: false,
    error: '',
}

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        collectionFetching(state) {
            state.isLoading = true;
        },
        collectionFetchingSuccess(state, action: PayloadAction<IClothes[]>) {
            state.isLoading = false;
            state.error = "";
            state.clothes = action.payload;
        },
        collectionFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
})

export default collectionSlice.reducer;