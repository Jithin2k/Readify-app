import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice.js"
import searchReducer from "./searchSlice.js"
import cartReducer from "./cartSlice.js"
import orderReducer from "./orderSlice.js"
import tokenReducer from "./urlSlice.js"

const appStore = configureStore({
    reducer:{
        bookData : bookReducer,
        search : searchReducer,
        cart : cartReducer,
        orders : orderReducer,
        userToken : tokenReducer
       }
})

export default appStore;