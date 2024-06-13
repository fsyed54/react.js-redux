import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todoIndex = action.payload;
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    },
    removeTodo: (state, action) => {
      console.log();
      const todoIndex = action.payload;
      state.todos = state.todos.filter((todo, index) => index !== todoIndex);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
