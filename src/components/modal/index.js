import { useState } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";
import { MText } from "../text";
import { MTextInput } from "../textInput";
import { useSelector, useDispatch } from "../../store/index";
import { addTodos } from "../../slices/todo";

export const CustomModal = (props) => {
  const [description, setDescription] = useState("");
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const handleChange = (text) => {
    setDescription(text);
  };
  const handleAddTodo = () => {
    const todo = {
      id: todos.length + 1,
      description,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    dispatch(addTodos(todo));
    setDescription("");
    props.handleClose();
  };
  return (
    <View style={styles.container}>
      <Modal {...props}>
        <View style={styles.modal}>
          <MText>Add Todos</MText>
          <View style={styles.inputContainer}>
            <MTextInput
              placeholder="Enter your todo..."
              value={description}
              onChangeText={handleChange}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              title="Close"
              style={styles.btn}
              onPress={props.handleClose}
            />
            <Button title="Add" style={styles.btn} onPress={handleAddTodo} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    height: 300,
    width: "80%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 180,
    marginLeft: 40,
  },
  btnContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: {
    paddingHorizontal: 2,
  },
  inputContainer: {
    marginVertical: 30,
  },
});
