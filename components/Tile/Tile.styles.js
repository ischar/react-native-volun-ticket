import styled from "styled-components";
import { lightTheme } from "../../theme/theme";

export const TileContainer = styled.View`
  border-radius: 20px;
  background-color: ${(props) => (props.isColor ? lightTheme.colorCard : lightTheme.card)};
  width: 100%;
  height: 100%;
`;

export const TileTitleText = styled.Text`
  text-align: right;
  color: ${lightTheme.primaryText};
  font-size: 16px;
  font-weight: 600;
  margin-top: 6px;
  margin-right: 4px;
`;

export const TileSubTitleText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${lightTheme.subText};
  margin-top: 6px;
  margin-right: 8px;
`;

export const TileHeader = styled.View`
  padding-top: 16px;
  padding-right: 12px;
  flex-direction: row;
  justify-content: flex-end;
`;
