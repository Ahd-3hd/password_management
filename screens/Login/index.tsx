import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  ButtonText,
  Form,
  TextInput,
  InputLabel,
  InputGroup,
} from "./index.style";

import { useDispatch } from "react-redux";
import { setCurrentUser, getCurrentUser } from "../../redux/ducks/currentUser";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const handleLogin = () => {
    dispatch(getCurrentUser());
  };

  return (
    <Container>
      <Title>Login to your account</Title>
      <Form>
        <InputGroup>
          <InputLabel>username</InputLabel>
          <TextInput
            placeholder="Enter your username"
            onChangeText={(text) =>
              setLoginData((prevState) => ({ ...prevState, username: text }))
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>password</InputLabel>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setLoginData((prevState) => ({ ...prevState, password: text }))
            }
          />
        </InputGroup>
        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
