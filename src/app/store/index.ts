import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createFormSlice from "./slices/showFormSlice";
import tasksSlice from "./slices/tasksSlice";

const rootReducer = combineReducers({
    show: createFormSlice,
    tasks: tasksSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

