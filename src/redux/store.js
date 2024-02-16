import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import isLoggedReducer from "./isLoggedSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer, //slice user
        isLogged: isLoggedReducer
    },
});