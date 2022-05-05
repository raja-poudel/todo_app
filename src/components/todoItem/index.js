import { View, Text, StyleSheet, Alert, ToastAndroid } from "react-native";
import { MText } from "../text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { format } from "date-fns";
import { useDispatch, useSelector } from "../../store";
import { addSelectedTodoId } from "../../slices/todo";

export const TodoItem = ({
  handleCloseCheckbox,
  handleLongPress,
  handleCompleted,
  handleNotComplete,
  handlePress,
  longPresss,
  todo,
}) => {
  const dispatch = useDispatch();
  const { selectedTodoId } = useSelector((store) => store.todo);
  const handleSelect = (id) => {
    dispatch(addSelectedTodoId(id));
  };
  const handleSelectedTodo = (id) => {
    return selectedTodoId.includes(id) ? true : false;
  };
  return (
    <TouchableOpacity
      key={todo.id}
      onLongPress={handleLongPress}
      onPress={handlePress}
    >
      <View style={styles(longPresss).itemContainer}>
        {longPresss ? (
          <TouchableOpacity onPress={() => handleSelect(todo.id)}>
            <View style={styles.checkboxContainer}>
              {handleSelectedTodo(todo.id) ? (
                <Ionicons name="checkbox" size={32} />
              ) : (
                <Ionicons name="checkbox-outline" size={32} />
              )}
            </View>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={handleCloseCheckbox}>
          <View style={styles.messageContainer}>
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
                : {format(new Date(todo.updatedAt), "yyyy-MM-dd")}
              </MText>
            ) : (
              <MText fontSize={15}>
                <Text fontSize={15} style={styles.label}>
                  Created At
                </Text>
                : {format(new Date(todo.createdAt), "yyyy-MM-dd")}
              </MText>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
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
    </TouchableOpacity>
  );
};

const styles = (longPresss) =>
  StyleSheet.create({
    itemContainer: {
      //   flex: 1,
      backgroundColor: "#fff",
      padding: 13,
      marginBottom: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 8,
    },
    checkboxContainer: {
      width: "100px",
      //   flex: 2,
    },
    messageContainer: {
      //   flex: 6,
      width: "200px",
    },
    iconContainer: {
      //   flex: 2,
      width: "100px",
    },
  });
