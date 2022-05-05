import { useTodoList } from "./useTodoList";
import { TodoItem } from "../todoItem";

export const TodoList = ({ todos }) => {
  const {
    handleCompleted,
    handleNotComplete,
    handleLongPress,
    longPresss,
    handlePress,
    handleCloseCheckbox,
  } = useTodoList();
  
  return todos.map((todo, index) => {
    return (
      <TodoItem
        key={index}
        todo={todo}
        handleCloseCheckbox={handleCloseCheckbox}
        handleLongPress={handleLongPress}
        handleCompleted={handleCompleted}
        handleNotComplete={handleNotComplete}
        handlePress={handlePress}
        longPresss={longPresss}
      />
    );
  });
};
