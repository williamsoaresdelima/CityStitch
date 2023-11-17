import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  align-self: flex-end;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
