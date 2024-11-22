import { Image } from "react-native";
import { Content } from "../layout/Content/Content.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner } from "../layout/Banner/Banner.styles";
import { Section } from "../layout/Section/Section.styles";
import { TileTitleText } from "../components/Tile/Tile.styles";
import { TileHeader } from "../components/Tile/Tile.styles";
import { ICONS } from "../utils/icons";
import { ICON_NAMES } from "../utils/icons";
import Tile from "../components/Tile/Tile";
import { StyledSafeAreaView } from "../layout/StyledSafeAreaView.style";

function HomeScreen() {
  return (
    <>
      <StyledSafeAreaView />
      <Content>
        <Banner>
          <Tile>
            <Image height={424} />
          </Tile>
        </Banner>
        <Section>
          <Tile isColor={true}>
            <TileHeader>
              <TileTitleText>봉사하기</TileTitleText>
              <Image source={ICONS.get(ICON_NAMES.RIGHT)} />
            </TileHeader>
          </Tile>
          <Tile>
            <TileHeader>
              <TileTitleText>티켓보기</TileTitleText>
              <Image source={ICONS.get(ICON_NAMES.RIGHT)} />
            </TileHeader>
          </Tile>
        </Section>
      </Content>
    </>
  );
}

export default HomeScreen;
