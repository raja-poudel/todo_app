import { View, StyleSheet, Button, Alert, ToastAndroid } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MText } from "../text";
import { useSelector, useDispatch } from "../../store";
import { deleteTodos } from "../../slices/todo";

export const HomeHeader = ({ title, navigation }) => {
  const { selectedTodoId } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const handleOpen = () => {
    navigation.openDrawer();
  };
  const handleDelete = () => {
    Alert.alert("Warning", "Are you sure you want to delete these todos?", [
      {
        text: "No",
        onPress: () =>
          ToastAndroid.show("You have pressed no.", ToastAndroid.SHORT),
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(deleteTodos());
          ToastAndroid.show("Successfully deleted.", ToastAndroid.SHORT);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={28}
            onPress={handleOpen}
            style={styles.icon}
          />
        </TouchableOpacity>
        <MText>{title}</MText>
      </View>
      {selectedTodoId.length > 0 ? (
        <Button title="Delete" onPress={handleDelete} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 10,
    padding: 10,
    backgroundColor: "#fff",
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInfo: {
    flexDirection: "row",
  },
  icon: {
    paddingRight: 28,
  },
});
