import { Pressable } from "react-native";
import { TileContainer } from "./Tile.styles";

function Tile({ children, onPress, isColor = false }) {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <TileContainer isColor={isColor}>{children}</TileContainer>
    </Pressable>
  );
}

export default Tile;
