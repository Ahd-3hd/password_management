import React from "react";
import { Container, TestText, Button } from "./index.style";
const Home = () => {
  const handleLogout = () => {};
  return (
    <Container>
      <TestText>Hello everybody!!</TestText>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
};

export default Home;
