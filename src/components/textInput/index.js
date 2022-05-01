import { View, TextInput, StyleSheet } from "react-native";

export const MTextInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 10,
    color: "white",
    paddingHorizontal: 80,
  },
  input: {
    width: 150,
  },
});
