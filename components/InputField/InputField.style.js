import styled from "styled-components";

export const Input = styled.TextInput`
  width: 75%;
  height: 40px;
  border-radius: 8px;
  padding-horizontal: 10px;
  padding-left: 16px;
  margin-vertical: 4px;
  background-color: ${({theme}) => theme.primary};
`;