import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieSlice from "./movieSlice";
import gptReducer from "./gptSlice"


const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieSlice,
        gpt:gptReducer,
    }
})

export default appStore;