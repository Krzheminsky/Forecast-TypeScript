import { configureStore } from "@reduxjs/toolkit";
import cloudeReducer from './cloudeSlice';
import lossesReducer from './lossesSlice';
import measureReducer from './measureSlice';

const store = configureStore({
    reducer: {
        cloud: cloudeReducer,
        losses: lossesReducer,
        measure: measureReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;