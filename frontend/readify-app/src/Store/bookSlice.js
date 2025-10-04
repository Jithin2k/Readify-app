import { createSlice } from "@reduxjs/toolkit";
// import { books } from "../assets/assets";




const bookSlice = createSlice({
  name: "bookData",
  initialState: {
    allBooks: [],
  },
  reducers: {
    setBooks : (state,action) =>{
      state.allBooks = action.payload;
    }
  } ,
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;
