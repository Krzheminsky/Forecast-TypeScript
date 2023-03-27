import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchMeteo: any = createAsyncThunk(
    'cloud/fetchMeteo',
    async function (currentUrl: string, { rejectWithValue }) {
        try {
            const response = await fetch(currentUrl);

            if (!response.ok) {
                throw new Error('Server Error!..')
            }
            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const cloudeSlice = createSlice({
    name: 'cloud',
    initialState: {

        chemical: 'Хлор',
        vertical: 'ізотермія',
        phisical: 'рідкий',
        probab: 'довгострокове',
        windSpeed: 1,
        airTemperature: 20,
        amountNHR: 1000,
        coefficient: 0.5,
        palletHeight: 0,
        boilingPoint: 0,
        coecificHeat: 0,
        density: 0,
        densityGas: 0,
        molWeight: 0,
        toxiCosis: 0,
        vaporisation: 0,
        nhr: 'Виберіть речовину',
        vert: 0,
        prob: 0.9,
        phis: 1,
        direction: 360,
        lat: 49.16,
        lng: 34.41,
        input: false,
        currentWeather:
        {
            "current_weather": {
                "temperature": 0,
                "windspeed": 0,
                "winddirection": 0,
                "weathercode": 100,
                "time": "2023-03-22T10:00"
            },

            "hourly": {
                "time": [
                    "2023-03-22T10:00",
                ],
                "temperature_2m": [
                    0,
                ],
                "soil_temperature_0cm": [
                    0,
                ]
            }
        },
        status: null,
        error: null,
    },
    reducers: {

        addLat(state, action: PayloadAction<number>) {
            state.lat = action.payload;
        },
        addLng(state, action: PayloadAction<number>) {
            state.lng = action.payload;
        },
        addDirectionWind(state, action: PayloadAction<number>) {
            state.direction = action.payload;
        },
        addChemical(state, action: PayloadAction<string>) {
            state.chemical = action.payload;
        },
        addVertical(state, action) {
            state.vertical = action.payload;
        },
        addPhisical(state, action: PayloadAction<string>) {
            state.phisical = action.payload;
        },
        addProbab(state, action: PayloadAction<string>) {
            state.probab = action.payload;
        },
        addWindSpeed(state, action: PayloadAction<number>) {
            state.windSpeed = action.payload;
        },
        addAirTemperature(state, action: PayloadAction<number>) {
            state.airTemperature = action.payload;
        },
        addAmountNHR(state, action: PayloadAction<number>) {
            state.amountNHR = action.payload;
        },
        addCoefficient(state, action: PayloadAction<number>) {
            state.coefficient = action.payload;
        },
        addPalletHeight(state, action: PayloadAction<number>) {
            state.palletHeight = action.payload;
        },
        addBoilingPoint(state, action: PayloadAction<number>) {
            state.boilingPoint = action.payload;
        },
        addCoefHeat(state, action: PayloadAction<number>) {
            state.coecificHeat = action.payload;
        },
        addDensity(state, action: PayloadAction<number>) {
            state.density = action.payload;
        },
        addDensityGas(state, action: PayloadAction<number>) {
            state.densityGas = action.payload;
        },
        addMolWeight(state, action: PayloadAction<number>) {
            state.molWeight = action.payload;
        },
        addToxiCosis(state, action: PayloadAction<number>) {
            state.toxiCosis = action.payload;
        },
        addVaporisation(state, action: PayloadAction<number>) {
            state.vaporisation = action.payload;
        },
        addNhr(state, action: PayloadAction<string>) {
            state.nhr = action.payload;
        },
        addVert(state, action: PayloadAction<number>) {
            state.vert = action.payload;
        },
        addPhis(state, action: PayloadAction<number>) {
            state.phis = action.payload;
        },
        addProb(state, action: PayloadAction<number>) {
            state.prob = action.payload;
        },
        addInput(state, action: PayloadAction<boolean>) {
            state.input = action.payload;
        }
    },
    extraReducers: {
        [fetchMeteo.pending]: (state: any) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchMeteo.fulfilled]: (state: any, action) => {
            state.status = 'resolved';
            state.currentWeather = action.payload;
        },
        [fetchMeteo.rejected]: (state: any, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
})

export const { addInput, addLat, addLng, addDirectionWind, addChemical, addVertical, addPhisical, addProbab, addWindSpeed, addAirTemperature, addAmountNHR, addCoefficient, addPalletHeight, addBoilingPoint, addCoefHeat, addDensity, addDensityGas, addMolWeight, addToxiCosis, addVaporisation, addNhr, addVert, addPhis, addProb } = cloudeSlice.actions;
export default cloudeSlice.reducer;
