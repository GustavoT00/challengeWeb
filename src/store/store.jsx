import { configureStore } from "@reduxjs/toolkit";
//import { counterSlice } from "./slices/counterSlice";
import { authSlice } from "./slices/AuthSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    }
})