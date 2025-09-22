import { createSlice } from "@reduxjs/toolkit";
import { books } from "../assets/assets";

const bookSlice = createSlice({
  name: "bookData",
  initialState: {
    allBooks: books,
  },
  reducers: {} ,
});

export default bookSlice.reducer;
