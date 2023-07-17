import { createSlice } from "@reduxjs/toolkit";

export const characterSlide = createSlice ({
    name: 'characters',
    initialState: {
        value: [],
    },
    reducers: {
        seeCharacters : (state, action) => {
            state.value = action.payload
        },
    }
})

export const {seeCharacters} = characterSlide.actions;