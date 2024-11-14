import Menu from "../components/Menu/Menu";
import { Container } from "./Container/Container.styles";
import { NavigationContainer } from "@react-navigation/native";
 
function RootLayout({ children }) {
  return (
    <Container>
      {children}
      <Menu />
    </Container>
  );
}

export default RootLayout;
