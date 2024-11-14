import styled from "styled-components";
import { lightTheme } from "../../theme/theme";

export const HeaderContainer = styled.View`
  flex: 1;
  height: 68px;
  top: 40px;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  paddingHorizontal: 16px;
`;

export const TitleText = styled.Text`
  text-align: center;
  color: ${lightTheme.primaryText};
  font-size: 16px;
  font-weight: 800;
`;
