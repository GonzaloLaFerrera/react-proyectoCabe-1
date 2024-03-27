import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    tasks: [],
    taskDetail: {}
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
        loadDetailTask: (state, action) => {
            state.taskDetail = action.payload
        },
        logoutUser: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.tasks = [];
            state.taskDetail = {};
        }
    }
});

export const { loadUser, loadUserTasks, loadDetailTask, logoutUser} = userSlice.actions;
export default userSlice.reducer;


/* if (!isLogged) {
    dispatch(logoutUser())
} */