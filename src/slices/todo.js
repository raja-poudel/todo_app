import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 28282828,
      description: "i have to go to mogok",
      completed: false,
      createdAt: "2022-04-10",
      updatedAt: "2022-05-1",
    },
    {
      id: 28282822,
      description: "i have to go to mandalay",
      completed: false,
      createdAt: "2022-04-10",
      updatedAt: "2022-05-1",
    },
    {
      id: 2828282,
      description: "i have to go to yangon",
      completed: true,
      createdAt: "2022-04-10",
      updatedAt: "2022-05-1",
    },
  ],
};
const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos = [action.payload].concat(state.todos);
    },
    updateTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: todo.completed ? false : true };
        }
        return todo;
      });
    },
  },
});
export const { addTodos, updateTodo } = todo.actions;

export const { reducer } = todo;
