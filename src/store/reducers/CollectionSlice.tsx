import {IClothes} from "../../models/IClothes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {AppDispatch} from "../store";

// import {fetchCollection} from "./CollectionActionCreators";

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


export const fetchCollection = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(collectionSlice.actions.collectionFetching());
        const response = await axios.get<IClothes[]>(
            `http://localhost:5000/clothes`
        );
        dispatch(collectionSlice.actions.collectionFetchingSuccess(response.data));
    } catch (e: any) {
        dispatch(collectionSlice.actions.collectionFetchingError(e.message));
    }
};


export default collectionSlice.reducer;