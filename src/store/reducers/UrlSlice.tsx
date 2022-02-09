import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UrlState {
    urlHuman: string;
    urlParams: string;
    modal: boolean;
}

const initialState: UrlState = {
    urlHuman: 'girl',
    urlParams: '',
    modal: false,
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
        },
        getModal(state) {
            state.modal = !state.modal
        }
    },
})
export const {getUrlHuman, getUrParams, getModal} = urlSlice.actions;

export default urlSlice.reducer;