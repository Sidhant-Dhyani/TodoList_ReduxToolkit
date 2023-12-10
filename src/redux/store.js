
import { configureStore } from '@reduxjs/toolkit';
import todos from '../redux/todoSlice';

export default configureStore(
    {
        reducer: {
            todos: todos,
        },
    }
);

