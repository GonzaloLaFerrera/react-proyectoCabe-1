import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
};

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            const { firstName, lastName, email } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.email = email;
        },
    }
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;