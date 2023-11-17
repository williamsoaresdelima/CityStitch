import styled from "styled-components/native";

export const CustomButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 8px;
  text-align: center;
  border-radius: 6px;
`;

export const CustomText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
