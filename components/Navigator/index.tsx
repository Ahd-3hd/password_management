import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { getCurrentUser } from "../../redux/thunk/currentUser";
import { Reducer } from "../../redux/store";
import Signup from "../../screens/Signup";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  const dispatch = useDispatch();
  const { username, loggedIn, error, loading } = useSelector(
    (state: Reducer) => state.currentUser
  );

  useEffect(() => {
    dispatch(getCurrentUser());
    console.log("HEREEEEEE", username);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
