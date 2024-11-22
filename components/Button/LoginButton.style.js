import styled from "styled-components";

export const LoginButtonContainer = styled.View`
  padding-horizontal: 33%;
  padding-vertical: 12px;
  margin-vertical: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorCard};
`;

export const LoginText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.primaryText};
  font-weight: 600;
`;
