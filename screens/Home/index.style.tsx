import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #fcfdff;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

export const SearchInput = styled.TextInput`
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 8px;
`;

export const PasswordsList = styled.View``;
const PasswordItem = styled.View``;
const PasswordTitle = styled.Text``;
const PasswordButtons = styled.View``;
const PasswordButton = styled.Button``;

export const PasswordComponent = ({ title }: { title: string }) => {
  return (
    <PasswordItem>
      <PasswordTitle>{title}</PasswordTitle>
      <PasswordButtons>
        <PasswordButton title="copy" onPress={() => {}} />
        <PasswordButton title="delete" onPress={() => {}} />
      </PasswordButtons>
    </PasswordItem>
  );
};

export const FloatingButton = styled.TouchableOpacity`
  background: #1d1ada;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 16px;
  padding: 16px;
  height: 58px;
  width: 58px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px #4561df;
`;
export const FloatingButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
