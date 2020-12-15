import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/auth/actionCreator";
import { Container, TestText, Button } from "./index.style";
const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(null));
  };
  return (
    <Container>
      <TestText>Hello everybody!!</TestText>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
};

export default Home;
