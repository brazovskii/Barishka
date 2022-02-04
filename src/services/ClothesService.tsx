import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IClothes} from "../models/IClothes";

export const clothesAPI = createApi({
    reducerPath: "clothesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], number | string>({
            query: (url) => `${url}`
        }),
    })
})
