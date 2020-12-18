import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../redux/thunk/currentUser";

const Signup = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    repeated: "",
  });
  const handleSignup = () => {
    if (signupData.password === signupData.repeated) {
      dispatch(
        signup({
          username: signupData.username,
          password: signupData.password,
        })
      );
    }
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
              setSignupData((prevState) => ({ ...prevState, username: text }))
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>password</InputLabel>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setSignupData((prevState) => ({ ...prevState, password: text }))
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>repeat password</InputLabel>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setSignupData((prevState) => ({ ...prevState, repeated: text }))
            }
          />
        </InputGroup>
        <Button onPress={handleSignup}>
          <ButtonText>Signup</ButtonText>
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
