import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.darkGray};
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mediumGray};
  padding: 6px 8px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const ViewMap = styled.View`
  padding: 16px;
  height: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;
