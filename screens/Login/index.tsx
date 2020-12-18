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
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/Navigator";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
const Login = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const handleLogin = () => {};

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
      <Button onPress={() => navigation.navigate("Signup")}>
        <ButtonText>Create Account</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
