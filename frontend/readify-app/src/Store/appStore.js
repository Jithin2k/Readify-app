import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js"
import searchReducer from "./searchSlice.js"
import cartReducer from "./cartSlice.js"

const appStore = configureStore({
    reducer:{
        bookData : bookReducer,
        search : searchReducer,
        cart : cartReducer
    }
})

export default appStore;