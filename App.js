import { View } from "react-native";
import React from "react";
import Login from "./components/Login";
import Hello from "./components/Hello";
import ToastManager, {
  Toast,
} from "toastify-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <ToastManager />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Hello" component={Hello} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
