import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createFormSlice from "./slices/showFormSlice";
import tasksSlice from "./slices/tasksSlice";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
    show: createFormSlice,
    tasks: tasksSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

