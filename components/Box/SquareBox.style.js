import styled from "styled-components";

export const SquareBoxContainer = styled.View`
  margin-top: 35%;
  margin-bottom: 7%;
  width: 100%;
  height: 278px;
  align-items: center;
  justify-content: center;

`;

export const SquareBoxContent = styled.View`
  width: 70%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.card};
`;

export const SquareBoxText = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.subText};
`;
