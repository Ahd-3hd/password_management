import React from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/auth/actionCreator";
import { Container, TestText, Button } from "./index.style";

const Login = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentUser({ username: "Ahd", password: "123" }));
  };
  return (
    <Container>
      <TestText>Login asdasdassssdasdasd</TestText>
      <Button title="login" onPress={handleClick} />
    </Container>
  );
};

export default Login;
