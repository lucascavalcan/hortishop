import {createSlice} from "@reduxjs/toolkit";
import { Fruit } from "../../types/Fruit";

export const slice = createSlice({
    name: "cart",
    initialState: {
        items: [] 
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        }
    }
});

export const {setItems} = slice.actions;
export default slice.reducer