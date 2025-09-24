import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        searchTerm : "",
        showSearchBar : true,
    },
     reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    setShowSearchBar: (state, action) => {
      state.showSearchBar = action.payload;
    },
  },
});

export const {setSearchTerm,clearSearchTerm,setShowSearchBar} = searchSlice.actions;

export default searchSlice.reducer;