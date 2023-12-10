
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },

        delete: (state, action) => {
            const todoIndex = action.payload;
            state.value.splice(todoIndex, 1);
        },

        edit: (state, action) => {
            const { index, newText } = action.payload;
            state.value.splice(index, 1, newText);
        }

    }
});

export const { add, delete: deleteTodo, edit } = counterSlice.actions;

export default counterSlice.reducer;

