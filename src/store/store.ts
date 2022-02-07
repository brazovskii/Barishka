import {combineReducers, configureStore} from "@reduxjs/toolkit";
import collectionReducer from './reducers/CollectionSlice'
import urlReducer from './reducers/UrlSlice'
import searchReducer from './reducers/SearchSlice'
import basketReducer from './reducers/BasketListSlice'
import {clothesAPI} from "../services/ClothesService";

const rootReducer = combineReducers({
    collection: collectionReducer,
    url: urlReducer,
    search: searchReducer,
    basketList: basketReducer,
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
