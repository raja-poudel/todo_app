import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTodo = async (todo) => {
  let todos = await AsyncStorage.getItem("todos");
  try {
    if (todos === null) {
      await AsyncStorage.setItem("todos", JSON.stringify([todo]));
    } else {
      let newTodos = [todo].concat(JSON.parse(todos));
      await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    }
  } catch (e) {
    console.warn(e);
  }
};

export const updateTodo = async (id) => {
  let res = await AsyncStorage.getItem("todos");
  let todos = JSON.parse(res);
  try {
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    const index = todos.map((todo) => todo.id).indexOf(id);
    let firstPart = todos.slice(0, index);
    let secondPart = todos.slice(index + 1);
    let newTodos = [...firstPart, todo, ...secondPart];
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  } catch (e) {
    console.warn(e);
  }
};

export const deleteTodo = async (id) => {
  let res = await AsyncStorage.getItem("todos");
  let todos = JSON.parse(res);
  try {
    if (todos === null) return;
    let newTodos = todos.filter((todo) => todo.id !== id);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
  } catch (e) {
    console.warn(e);
  }
};

export const getTodos = async () => {
  try {
    const todos = await AsyncStorage.getItem("todos");
    if (todos === null) return [];
    return JSON.parse(todos);
  } catch (e) {
    console.warn("Getting Todos" + e);
  }
};

export const clearTodos = async () => {
  try {
    await AsyncStorage.removeItem("todos");
  } catch (e) {
    console.warn(e);
  }
};
