import {configureStore, combineReducers} from "@reduxjs/toolkit";
import collectionReducer from './reducers/CollectionSlice'
import urlReducer from './reducers/UrlSlice'
import {clothesAPI} from "../services/ClothesService";

const rootReducer = combineReducers({
    collectionReducer,
    urlReducer,
    [clothesAPI.reducerPath]: clothesAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(clothesAPI.middleware)
    });
};

export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
