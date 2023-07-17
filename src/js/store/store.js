import { configureStore } from "@reduxjs/toolkit";
import { characterSlide } from "./Slice/charactersSlice.js"; 
import { characterDetailSlice }  from "./Slice/characterDetailSlice.js"
import { planetSlice } from "./Slice/planetSlice.js"
import { planetDetailsSlice } from "./Slice/planetDetailSlice.js";

export default configureStore({
    reducer: {
        characters: characterSlide.reducer,
        characterDetails: characterDetailSlice.reducer,
        planets: planetSlice.reducer,
        planetDetails: planetDetailsSlice.reducer
    }
})