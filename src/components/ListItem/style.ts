import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 6px;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;

export const Item = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export const ItemName = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
`;
