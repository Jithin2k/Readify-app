import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js"
import searchReducer from "./searchSlice.js"

const appStore = configureStore({
    reducer:{
        bookData : bookReducer,
        search : searchReducer
    }
})

export default appStore;