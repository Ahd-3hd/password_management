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

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    repeated: "",
  });
  const handleSignup = () => {};

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
