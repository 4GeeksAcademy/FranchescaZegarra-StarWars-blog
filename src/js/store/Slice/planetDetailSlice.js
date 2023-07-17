import { createSlice } from "@reduxjs/toolkit";

export const planetDetailsSlice = createSlice({
    name: 'planetDetail',
    initialState : {
        value: {}
    },
    reducers: {
        seePlanetDetail: (state, action) =>{
            state.value = action.payload
        }
    }
})

export const {seePlanetDetail} = planetDetailsSlice.actions;