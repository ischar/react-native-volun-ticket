import { Placeholder } from "../Placeholder/Placeholder.style";
import { HeaderContainer } from "./Header.style";
import { TitleText } from "./Header.style";
import { Text } from "react-native";
import { ICON_NAMES } from "../../utils/icons";
import ImageButton from "../Button/ImageButton";

function Header({ isBack = false, title, isMain = false }) {
  return (
    <HeaderContainer>
      {isBack ? <ImageButton image={ICON_NAMES.BACK} /> : <Placeholder />}
      <TitleText>
        <Text>{title}</Text>
      </TitleText>
      {isMain ? <ImageButton imageName={ICON_NAMES.SEARCH} /> : <Placeholder />}
    </HeaderContainer>
  );
}

export default Header;
