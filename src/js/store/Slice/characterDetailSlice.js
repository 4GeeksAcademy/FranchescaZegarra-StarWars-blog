import { createSlice } from "@reduxjs/toolkit";

export const characterDetailSlice = createSlice({
    name: 'characterDetails',
    initialState: {
        value:{},
    },
    reducers: {
        seeCharacterDetails: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {seeCharacterDetails} = characterDetailSlice.actions;