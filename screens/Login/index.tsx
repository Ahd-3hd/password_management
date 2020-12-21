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
import { useDispatch } from "react-redux";
import { RootStackParamList } from "../../components/Navigator";
import { login } from "../../redux/thunk/currentUser";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
// { navigation: LoginScreenNavigationProp }
const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleLogin = () => {
    dispatch(login(loginData));
  };

  return (
    <Container>
      <Title>Login to your account</Title>
      <Form>
        <InputGroup>
          <InputLabel>email</InputLabel>
          <TextInput
            placeholder="Enter your email"
            onChangeText={(text) =>
              setLoginData((prevState) => ({ ...prevState, email: text }))
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
