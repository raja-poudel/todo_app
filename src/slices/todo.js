import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  saveTodo,
  updateTodo as updateTodoAsync,
  deleteTodo,
} from "../hooks/async-storage";

const initialState = {
  todos: [],
  selectedTodoId: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      //async action
      saveTodo(action.payload);
      state.todos = [action.payload].concat(state.todos);
    },
    updateTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          let newTodo = { ...todo, completed: todo.completed ? false : true };
          //async action
          updateTodoAsync(id);
          return newTodo;
        }
        return todo;
      });
    },
    addSelectedTodoId: (state, action) => {
      if (!state.selectedTodoId.includes(action.payload)) {
        state.selectedTodoId = state.selectedTodoId.concat([action.payload]);
      } else {
        state.selectedTodoId = state.selectedTodoId.filter(
          (todo) => todo !== action.payload
        );
      }
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => !state.selectedTodoId.includes(todo.id)
      );
      const todoIds = state.todos.map((todo) => {
        if (state.selectedTodoId.includes(todo.id)) return todo.id;
      });
      state.selectedTodoId.map(async (id) => {
        await deleteTodo(id);
      });
      let newSelectedTodoId = todoIds.filter((todo) => todo !== undefined);
      state.selectedTodoId = newSelectedTodoId;
    },
    clearTodos: (state, action) => {
      state.todos = [];
    },
    clearSelectedTodos: (state) => {
      state.selectedTodoId = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(setTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const setTodos = createAsyncThunk("todos", async () => {
  const todos = await getTodos();
  return todos;
});

setTodos();

export const {
  addTodos,
  updateTodo,
  clearTodos,
  addSelectedTodoId,
  clearSelectedTodos,
  deleteTodos,
} = todo.actions;

export const { reducer } = todo;
