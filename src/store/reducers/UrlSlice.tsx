import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UrlState {
    urlHuman: string;
    urlParams: string;
}

const initialState: UrlState = {
    urlHuman: '',
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
            state.urlHuman = action.payload
        }
    },
})

export default urlSlice.reducer;