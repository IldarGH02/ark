import { createSlice } from '@reduxjs/toolkit'

interface ICreateFormState {
    createForm: boolean
    changeForm: boolean
}

const createFormState: ICreateFormState = {
    createForm: false,
    changeForm: false
}

const showFormSlice = createSlice({
    name: 'form',
    initialState: createFormState,
    reducers: {
        showCreateForm(state, action) {
            state.createForm = action.payload
        },
        showChangeForm(state, action) {
            state.changeForm = action.payload
        }
    }
})

export const { showCreateForm, showChangeForm } = showFormSlice.actions
export default showFormSlice.reducer