import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    tasks: []
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
        loadUserTasks: (state, action) => {
            state.tasks = action.payload
        },
        logoutUser: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.tasks = [];
        }
    }
});

export const { loadUser, loadUserTasks, logoutUser} = userSlice.actions;
export default userSlice.reducer;