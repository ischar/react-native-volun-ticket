import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { Container } from "./Container/Container.styles";
function RootLayout({ children }) {
  return (
    <>
      <Container>
        {children}
        <Header title="volunTicket" isMain={true} />
        <Menu />
      </Container>
    </>
  );
}

export default RootLayout;
