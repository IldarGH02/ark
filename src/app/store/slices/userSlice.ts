import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    email: string | null
    token: string | null
    id: string | null
    isAuth: boolean,
    error: null | string
}

const initialState:IInitialState = {
    email: null,
    token: null,
    id: null,
    isAuth: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.isAuth = action.payload.isAuth
            state.error = action.payload.error
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
            state.isAuth = false
        }
    }
})

export const {
    setUser,
    removeUser
} = userSlice.actions

export default userSlice.reducer