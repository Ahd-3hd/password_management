import React, { useState } from "react";
import {
  Container,
  Form,
  TextInput,
  InputLabel,
  InputGroup,
  Button,
  ButtonText,
} from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { Reducer } from "../../redux/store";

export default function Entry() {
  const [entryData, setEntryData] = useState({
    account: "",
    password: "",
  });
  const handleSubmit = () => {};
  return (
    <Container>
      <Form>
        <InputGroup>
          <InputLabel>Account</InputLabel>
          <TextInput
            placeholder="Enter your account"
            onChangeText={(text) =>
              setEntryData((prevState) => ({ ...prevState, account: text }))
            }
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <TextInput
            placeholder="Enter Password"
            onChangeText={(text) =>
              setEntryData((prevState) => ({ ...prevState, password: text }))
            }
          />
        </InputGroup>
        <Button onPress={handleSubmit}>
          <ButtonText>Create Account</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
