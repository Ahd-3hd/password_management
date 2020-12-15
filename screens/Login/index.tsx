import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/auth/actionCreator";
import {
  Container,
  TestText,
  Button,
  ButtonText,
  Form,
  TextInput,
  InputLabel,
  InputGroup,
} from "./index.style";

const Login = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentUser({ username: "Ahd", password: "123" }));
  };
  return (
    <Container>
      <TestText>Login to your account</TestText>
      <Form>
        <InputGroup>
          <InputLabel>username</InputLabel>
          <TextInput placeholder="Enter your username" />
        </InputGroup>
        <InputGroup>
          <InputLabel>username</InputLabel>
          <TextInput placeholder="Enter Password" />
        </InputGroup>
        <Button onPress={handleClick}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
