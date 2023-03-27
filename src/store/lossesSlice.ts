import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const lossesSlice = createSlice({
    name: 'losses',
    initialState: {
        timeMoment: 240,
        distanceSource: 1,
        populationDensity: 0,
        coefficientProtection: 0.72,
        areaAffected: 0,
    },
    reducers: {
        addTimeMoment(state, action: PayloadAction<number>) {
            state.timeMoment = action.payload;
        },
        addDistanceSource(state, action: PayloadAction<number>) {
            state.distanceSource = action.payload;
        },
        addPopulationDensity(state, action: PayloadAction<number>) {
            state.populationDensity = action.payload;
        },
        addCoefficientProtection(state, action: PayloadAction<number>) {
            state.coefficientProtection = action.payload;
        },
        addAreaAffected(state, action) {
            state.areaAffected = action.payload;
        },
    },
})

export const { addTimeMoment, addDistanceSource, addPopulationDensity, addCoefficientProtection, addAreaAffected } = lossesSlice.actions;
export default lossesSlice.reducer;
