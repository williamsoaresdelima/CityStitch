import styled from "styled-components/native";

export const Loading = styled.View`
  background-color: ${({ theme }) => theme.colors.darkGray};
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 20px;
`;
