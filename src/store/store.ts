import {configureStore, combineReducers} from "@reduxjs/toolkit";
import collectionReducer from './reducers/CollectionSlice'
import urlReducer from './reducers/UrlSlice'

const rootReducer = combineReducers({
    collectionReducer,
    urlReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
