 export const backendUrl = import.meta.env.VITE_BACKEND_URL;
// export const backendUrl= "http://localhost:4000";

import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name : "userToken",
    initialState : {
        token : ""
    },
    reducers :{
        setToken : (state,action) =>{
            state.token = action.payload;
        }
    }
})

export const {setToken} = tokenSlice.actions;
export default tokenSlice.reducer;