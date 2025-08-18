import {configureStore } from '@reduxjs/toolkit';
import todoReducer from '../todo/TodoSlice';

export const Store = configureStore({
    reducer: todoReducer,
});

// You can add reducers here if needed
// Store.reducer = {
//   // your reducers
// };