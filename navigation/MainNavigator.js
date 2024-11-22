import React, { useState, useEffect } from "react";
import { Modal } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import VolunteerScreen from "../screens/Volunteer/VolunteerScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  console.log(isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 확인 상태

  return (
    <>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Volunteer"
          component={VolunteerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShwon: false }}
        />
      </Stack.Navigator>
    </>
  );
}
export default MainNavigator;
