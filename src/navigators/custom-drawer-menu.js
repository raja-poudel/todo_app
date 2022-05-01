import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MText } from "../components/text";

export const CustomSidebarMenu = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <MText size={10} color={"white"}>
            Todo
          </MText>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: "grey",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    textAlign: "center",
  },
});
