import styled from "styled-components";

export const InfoActionBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  height: 50px;
  border-radius: 20px;
  margin-top: 48px;
`;

export const InfoActionBoxText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-left: 16px;
  color: ${({ theme }) => theme.primaryText};
`;

export const InfoActionButtonContainer = styled.View`
  width: 44px;
  height: 28px;
  padding-horizontal: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;
