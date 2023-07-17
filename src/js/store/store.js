import { configureStore } from "@reduxjs/toolkit";
import { characterSlide } from "./Slice/CharactersSlide"; 

export default configureStore({
    reducer: {
        characters: characterSlide.reducer
    }
})