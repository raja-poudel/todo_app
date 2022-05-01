import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { CustomSidebarMenu } from "./custom-drawer-menu";

const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: "Home Page" }}
        component={Home}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings Page",
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};
