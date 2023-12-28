import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITask} from "../../types/types";

interface ITasksState {
    tasks: ITask[],
    filteredTasks: ITask[],
    isLoading: boolean,
    filter: string | null,
    searchValue: string
}

const tasksState: ITasksState = {
    tasks: [],
    isLoading: false,
    filter: '',
    filteredTasks: [],
    searchValue: ''
}

const tasksSlice = createSlice({
    name: 'form',
    initialState: tasksState,
    reducers: {
        createTask(state, action) {
            state.tasks.push(action.payload)
        },

        filterTasks(state, action: PayloadAction<string | null>) {
            state.filter = action.payload;
            state.filteredTasks = state.tasks.filter((task) => task.direction === action.payload)
            if(state.filter) {
                state.filteredTasks = state.tasks.filter((task) => task.direction === action.payload)
            }
            if (state.filter === 'Категории'){
                state.filteredTasks = state.tasks
            }
        },

        searchTasks(state, action) {
            const filtered = state.tasks.filter((task) =>
                task.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                task.text.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                filteredTasks: filtered,
                searchValue: action.payload
            }
        },

        changeTask: (state, action) => {

        },

        deleteTask: (state, action) => {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id)
        }
    }
})

export const {
    createTask,
    deleteTask,
    filterTasks,
    searchTasks } = tasksSlice.actions
export default tasksSlice.reducer