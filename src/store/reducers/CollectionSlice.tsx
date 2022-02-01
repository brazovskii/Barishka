import {ICollection} from "../../models/ICollection";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCollection} from "./CollectionActionCreators";

interface CardState {
    collection: ICollection[];
    isLoading: boolean;
    error: string;
}

const initialState: CardState = {
    collection: [],
    isLoading: false,
    error: ''
}

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCollection.fulfilled.type]: (state, action: PayloadAction<ICollection[]>) => {
            state.isLoading = false;
            state.error = "";
            state.collection = action.payload;
        },
        [fetchCollection.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCollection.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default collectionSlice.reducer;