import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FormOrderState {
    name: string;
    phone: string;
    address: string;
    comments: string;
}

const initialState: FormOrderState = {
    name: '',
    phone: '',
    address: '',
    comments: '',
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        getPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload
        },
        getAddress(state, action: PayloadAction<string>) {
            state.address = action.payload
        },
        getComments(state, action: PayloadAction<string>) {
            state.comments = action.payload
        },
        resetForm(state) {
            state.name = ''
            state.phone = ''
            state.address = ''
            state.comments = ''
        }
    },
})
export const {resetForm, getName, getPhone, getAddress, getComments} = formSlice.actions;

export default formSlice.reducer;