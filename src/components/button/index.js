import { Button, StyleSheet } from "react-native";
export const MButton = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} styles={styles.button} />;
};

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    padding: 10,
  },
});
