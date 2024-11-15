import { Pressable } from "react-native";
import { TileContainer } from "./Tile.styles";

function Tile({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <TileContainer>{children}</TileContainer>
    </Pressable>
  );
}

export default Tile;
