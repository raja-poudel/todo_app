import { StyleSheet, Text } from "react-native";

export const MText = (props) => {
  const { children } = props;
  return <Text style={styles(props).text}>{children}</Text>;
};

const styles = (props) =>
  StyleSheet.create({
    text: {
      fontSize: props.fontSize ? props.fontSize : 20,
      color: props.color ? props.color : "black",
    },
  });
