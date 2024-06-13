import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todoIndex = action.payload;
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      console.log();
      const todoIndex = action.payload;
      state.todos = state.todos.filter((todo, index) => index !== todoIndex);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
