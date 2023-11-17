import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.darkGray};
  height: 100%;
`;

export const ListView = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  gap: 30px;
`;

export const EmpytList = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;

export const EmpytMessage = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 16px;
  padding: 12px;
`;
