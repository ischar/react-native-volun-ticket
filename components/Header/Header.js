import { Placeholder } from "../Placeholder/Placeholder.style";
import { HeaderContainer } from "./Header.style";
import ImageButton from "../Button/ImageButton";
import { TitleText } from "./Header.style";
import { Text } from "react-native";

function Header({ isBack = false, title, isMain = false }) {
  return (
    <HeaderContainer>
      {isBack ? <ImageButton /> : <Placeholder />}
      <TitleText>
        <Text>{title}</Text>
      </TitleText>
      {isMain ? <ImageButton /> : <Placeholder />}
    </HeaderContainer>
  );
}

export default Header;
