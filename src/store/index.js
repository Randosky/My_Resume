import { configureStore } from '@reduxjs/toolkit';
import webReducer from "./webSlice";

export default configureStore({
    reducer: {
        webState: webReducer,
    }
});