import React, { useState } from "react";
import {
  Container,
  Title,
  SearchInput,
  PasswordsList,
  PasswordComponent,
  FloatingButton,
  FloatingButtonText,
} from "./index.style";
import { useSelector, useDispatch } from "react-redux";
import { Reducer } from "../../redux/store";

const Home = () => {
  const { username, passwords } = useSelector(
    (state: Reducer) => state.currentUser
  );
  const [searchText, setSearchText] = useState("");
  return (
    <Container>
      <Title>Hey {username} !</Title>
      <SearchInput
        onChangeText={(text) => setSearchText(text)}
        placeholder="search term"
      />
      <PasswordsList>
        {passwords.map((item) => {
          <PasswordComponent title={item.title} />;
        })}
      </PasswordsList>
      <FloatingButton>
        <FloatingButtonText>ADD</FloatingButtonText>
      </FloatingButton>
    </Container>
  );
};

export default Home;
