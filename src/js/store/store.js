import { configureStore } from "@reduxjs/toolkit";
import { characterSlide } from "./Slice/charactersSlice.js"; 
import { characterDetailSlice }  from "./Slice/characterDetailSlice.js"

export default configureStore({
    reducer: {
        characters: characterSlide.reducer,
        characterDetails: characterDetailSlice.reducer
    }
})