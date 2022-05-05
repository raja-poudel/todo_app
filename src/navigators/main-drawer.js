import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/home";
import { Settings } from "../screens/settings";
import { CustomSidebarMenu } from "./custom-drawer-menu";
import { HomeHeader } from "../components/homeHeader";
import { getHeaderTitle } from "@react-navigation/elements";
const Drawer = createDrawerNavigator();
import { useEffect } from "react";
import { setTodos } from "../slices/todo";
import { useDispatch } from "../store";

export const MainDrawer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    initTodos();
  }, []);
  async function initTodos() {
    dispatch(setTodos());
  }
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
        component={Home}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShow: false,
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <HomeHeader
                title={"Raja Poudel"}
                navigation={navigation}
                style={options.headerStyle}
              />
            );
          },
        }}
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
