import React from "react";
import { View } from "react-native";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import UserList from "./Screens/UserList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Gesture } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();
const ScreenContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Login} />
        <Stack.Screen name="SignUp"  component={SignUp} />
        <Stack.Screen name="userList"  component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );    
};  

export default ScreenContainer;
