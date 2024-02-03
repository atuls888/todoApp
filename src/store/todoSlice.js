import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // console.log(state.todos);
    },
    updateTodo: (state, action) => {
      const { updatedTodo, id } = action.payload;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedTodo } : todo
      );
      //  console.log(state.todos);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
