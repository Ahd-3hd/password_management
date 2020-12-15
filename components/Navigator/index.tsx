import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

const Stack = createStackNavigator();

const Navigator = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {currentUser.loggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
