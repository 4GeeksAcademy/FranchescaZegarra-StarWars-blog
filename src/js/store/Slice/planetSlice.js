import { createSlice } from "@reduxjs/toolkit";

export const planetSlice = createSlice({
    name: 'planets',
    initialState: {
        value:[],
    },
    reducers: {
        seePlanets: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {seePlanets} = planetSlice.actions;