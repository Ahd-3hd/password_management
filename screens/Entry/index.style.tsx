import styled from "styled-components/native";

export const Container = styled.View`
  background: #fcfdff;
`;
export const Form = styled.View`
  padding: 32px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const TextInput = styled.TextInput`
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 8px;
`;
export const InputLabel = styled.Text`
  margin-bottom: 8px;
  color: #555;
`;
export const InputGroup = styled.View`
  margin: 8px 0;
`;

export const Button = styled.TouchableOpacity`
  background: #5c6ae6;
  padding: 16px 0;
  border-radius: 5px;
  margin-top: 16px;
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
