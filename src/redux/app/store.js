import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "../features/shopSlice";


export const store = configureStore({
    reducer:{
        shop: shopReducer
    }
})