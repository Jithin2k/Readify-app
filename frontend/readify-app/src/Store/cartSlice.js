import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItems : []
    },
    reducers: {
        addToCart : (state,action) =>{
            const book = action.payload;
             const existingBook = state.cartItems.find((item)=> item.id == book.id);

             if(existingBook){
                existingBook.quantity += 1;
             } else{
                state.cartItems.push({...book,quantity : 1})
             }
        },

        removeFromCart : (state,action) =>{
            const {id} = action.payload;
            state.cartItems = state.cartItems.filter((item)=> !(item.id === id))
        },

        updateQuantiy : (state,action) =>{
            const {id,quantity} = action.payload;

            if(item && quantity > 0){
                item.quantity = quantity;
            }
        }
    }
})

export const { addToCart,removeFromCart,updateQuantiy} = cartSlice.actions;

export default cartSlice.reducer;