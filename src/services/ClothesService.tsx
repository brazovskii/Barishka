import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IClothes} from "../models/IClothes";
import {IForm} from "../models/IOrders";


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
        createClothe: build.mutation<IClothes, IClothes>({
            query: (order) => ({
                url: `/clothes`,
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Orders"],
        }),
        createOrder: build.mutation<IForm, IForm>({
            query: (order) => ({
                url: `/orders`,
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Orders"],
        }),
        deleteClothe: build.mutation<IClothes[], number | string>({
            query: (id) => ({
                url: `/clothes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"],
        })
    })
})
