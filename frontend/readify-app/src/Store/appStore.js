import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js"

const appStore = configureStore({
    reducer:{
        bookData : bookReducer,
    }
})

export default appStore;