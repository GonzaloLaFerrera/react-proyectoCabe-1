import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLogged : false,
}

const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        setIsLogged : (state, action) => {
            state.isLogged = action.payload
        }
    },
});

export const {setIsLogged} = isLoggedSlice.actions;
export default isLoggedSlice.reducer;