import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MainDrawer } from "./src/navigators/main-drawer";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </ReduxProvider>
  );
}
