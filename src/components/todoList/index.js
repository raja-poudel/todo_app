import { View, Text, StyleSheet, Alert } from "react-native";
import { MText } from "../text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "../../store";
import { updateTodo } from "../../slices/todo";

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const handleCompleted = (id) => {
    Alert.alert("Warning", "Have you completed this?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(updateTodo(id));
          console.log("Successfully Updated.");
        },
      },
    ]);
  };
  const handleNotComplete = (id) => {
    Alert.alert("Warning", "Haven't you completed this?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(updateTodo(id));
          console.log("Successfully Updated.");
        },
      },
    ]);
  };
  return todos.map((todo) => {
    return (
      <View key={todo.id} style={styles.item}>
        <View>
          <MText fontSize={16.5}>
            <Text fontSize={15} style={styles.label}>
              Message
            </Text>
            : {todo.description}
          </MText>
          {todo.completed ? (
            <MText fontSize={15}>
              <Text fontSize={15} style={styles.label}>
                Updated At
              </Text>
              : {todo.updatedAt}
            </MText>
          ) : (
            <MText fontSize={15}>
              <Text fontSize={15} style={styles.label}>
                Created At
              </Text>
              : {todo.createdAt}
            </MText>
          )}
        </View>
        <View>
          {todo.completed ? (
            <TouchableOpacity onPress={() => handleNotComplete(todo.id)}>
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleCompleted(todo.id)}>
              <Ionicons
                name="ellipsis-horizontal-circle-sharp"
                size={32}
                color="green"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 13,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
  },
});
