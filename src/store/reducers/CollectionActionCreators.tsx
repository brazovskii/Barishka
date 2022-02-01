import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ICollection} from "../../models/ICollection";


export const fetchCollection = createAsyncThunk(
    "collection/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICollection[]>(
                "http://localhost:5000/girl"
            );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить");
        }
    }
);
