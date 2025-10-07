import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;
      const existingBook = state.cartItems.find((item) => item.id === book.id);

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.cartItems.push({ ...book, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    setCartItems: (state, action) => {

      state.cartItems = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const getCartTotal = (state) =>
  state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
