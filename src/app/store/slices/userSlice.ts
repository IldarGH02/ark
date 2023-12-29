import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    email: string | null
    token: string | null
    id: string | null
    isAuth: boolean
}

const initialState:IInitialState = {
    email: null,
    token: null,
    id: null,
    isAuth: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
        }
    }
})

export const {
    setUser,
    removeUser
} = userSlice.actions

export default userSlice.reducer