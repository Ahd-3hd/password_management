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
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../components/Navigator";
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Entry"
>;
// { navigation: HomeScreenNavigationProp }
const Home = ({ navigation }: any) => {
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
      <FloatingButton onPress={() => navigation.navigate("Entry")}>
        <FloatingButtonText>ADD</FloatingButtonText>
      </FloatingButton>
    </Container>
  );
};

export default Home;
