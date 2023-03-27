import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const measureSlice = createSlice({
    name: 'measure',
    initialState: {
        distance: 1,
        area: 0,
    },
    reducers: {
        addDistance(state, action: PayloadAction<number>) {
            state.distance = action.payload;
        },
        addArea(state, action) {
            state.area = action.payload;
        },
    },
})

export const { addDistance, addArea } = measureSlice.actions;
export default measureSlice.reducer;
