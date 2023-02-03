import { createSlice } from "@reduxjs/toolkit";


const webSlice = createSlice({
    name: "webSlice",
    initialState: {
        burgerClass: "locked",
        burgerVisible:  false
    },
    reducers: {
        openBurger(state) {
            if (state.burgerVisible){
                state.burgerClass = "locked";
            }
            else{
                state.burgerClass = "unlocked";
            }
            state.burgerVisible = !state.burgerVisible
        }
    },
});

export const { openBurger } = webSlice.actions

export default webSlice.reducer;