import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ModalButton = ({ onPress }) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 25,
  },
  text: {
    fontSize: 35,
    color: "white",
  },
});
