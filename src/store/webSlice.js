import { createSlice } from "@reduxjs/toolkit";


const webSlice = createSlice({
    name: "webSlice",
    initialState: {
        burgerVisible:  false
    },
    reducers: {
        openBurger(state) {
            state.burgerVisible = !state.burgerVisible
        }
    },
});

export const { openBurger } = webSlice.actions

export default webSlice.reducer;