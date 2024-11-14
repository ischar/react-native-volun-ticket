import styled from "styled-components";
import { lightTheme } from "../../theme/theme";

export const MenuItemContainer = styled.View`
  width: 44px;
  height: 47px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 12px;
  position: relative;
`;

export const MenuText = styled.Text`
  text-align: center;
  color: ${lightTheme.menuText};
  font-size: 12px;
  font-weight: 900;
  margin-top: 4px;
`;
