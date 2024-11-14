import styled from "styled-components";
import { lightTheme } from "../../theme/theme";

export const MenuContainer = styled.View`
  width: 100%;
  height: 93px;
  left: 0px;
  bottom: 0px;
  position: absolute;
  justify-content: center;
  background-color: ${lightTheme.card};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: row;
`;
