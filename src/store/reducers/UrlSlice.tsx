import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UrlState {
    urlHuman: string;
    urlParams: string;
}

const initialState: UrlState = {
    urlHuman: 'girl',
    urlParams: ''
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        getUrlHuman(state, action: PayloadAction<string>) {
            state.urlHuman = action.payload
        },
        getUrParams(state, action: PayloadAction<string>) {
            state.urlParams = action.payload
        }
    },
})
export const {getUrlHuman, getUrParams} = urlSlice.actions;

export default urlSlice.reducer;