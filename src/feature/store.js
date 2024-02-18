import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session"
import persistReducer from "redux-persist/es/persistReducer";
import { thunk } from 'redux-thunk';
import user from './Slice/user'

const reducers = combineReducers({
    user: user,
});

const persistConfig = {
    key: 'root',
    storage: storageSession,
};
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: () => middleware,
});
export default store