import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IClothes} from "../models/IClothes";
import {IOrders} from "../models/IOrders";


export const clothesAPI = createApi({
    reducerPath: "clothesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    tagTypes: ["Orders"],
    endpoints: (build) => ({
        getClothes: build.query<IClothes[], number | string>({
            query: (url) => `${url}`,
            providesTags: (result) => ["Orders"],
        }),
        createOrder: build.mutation<IOrders, IOrders>({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Orders"],
        })
    })
})
