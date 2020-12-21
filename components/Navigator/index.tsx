import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { login } from "../../redux/thunk/currentUser";
import { Reducer } from "../../redux/store";
import Signup from "../../screens/Signup";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const verify = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(login(token));
      }
    };
    verify();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {loggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
