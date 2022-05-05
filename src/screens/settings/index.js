import { View, StyleSheet, Alert, ToastAndroid } from "react-native";
import { styles as mainStyle } from "./../../style/container";
import { MText } from "../../components/text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { clearTodos } from "../../slices/todo";
import { clearTodos as clearTodosAsync } from "../../hooks/async-storage";
import { useDispatch } from "../../store";

export const Settings = () => {
  const dispatch = useDispatch();
  const handleClearTodos = () => {
    Alert.alert("Warning", "Are you sure you want to clear all todos?", [
      {
        text: "No",
        onPress: () =>
          ToastAndroid.show("You have pressed no.", ToastAndroid.SHORT),
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(clearTodos());
          clearTodosAsync();
          ToastAndroid.show("Successfully cleared.", ToastAndroid.SHORT);
        },
      },
    ]);
  };
  return (
    <View style={mainStyle.container}>
      <View>
        <MText>General Settings</MText>
        <View style={styles.sectionContainer}>
          <TouchableOpacity onPress={handleClearTodos}>
            <View style={styles.item}>
              <MText fontSize={18}>Clear All</MText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 12,
  },
  item: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
});
