import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice"

// give todo reducer to the store to manage it
export const store = configureStore({
    reducer: todoReducer
})