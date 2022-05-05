import { Alert, ToastAndroid } from "react-native";
import { useState } from "react";
import { useDispatch } from "../../store";
import { updateTodo, clearSelectedTodos } from "../../slices/todo";

export const useTodoList = () => {
  const [longPresss, setLongPress] = useState();
  const dispatch = useDispatch();
  const handleCompleted = (id) => {
    Alert.alert("Warning", "Have you completed this?", [
      {
        text: "No",
        onPress: () =>
          ToastAndroid.show("You have pressed no.", ToastAndroid.SHORT),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(updateTodo(id));
          ToastAndroid.show("Successfully updated.", ToastAndroid.SHORT);
        },
      },
    ]);
  };
  const handleNotComplete = (id) => {
    Alert.alert("Warning", "Haven't you completed this?", [
      {
        text: "No",
        onPress: () =>
          ToastAndroid.show("You have pressed no.", ToastAndroid.SHORT),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(updateTodo(id));
          ToastAndroid.show("Successfully updated.", ToastAndroid.SHORT);
        },
      },
    ]);
  };
  const handleLongPress = () => {
    setLongPress(true);
  };
  const handlePress = () => {
    dispatch(clearSelectedTodos());
    setLongPress(false);
  };
  const handleCloseCheckbox = () => {
    handlePress();
  };
  return {
    handleLongPress,
    handleCompleted,
    handleNotComplete,
    longPresss,
    handlePress,
    handleCloseCheckbox,
  };
};
