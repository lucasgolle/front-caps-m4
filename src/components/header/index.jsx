import {
  Container,
  IMGDesktopTitle,
  IMGMobileTitle,
  MenuMobile,
} from "./style";
import solidDesktop from "../../assets/SOLIDCONTROLTITLE.png";
import solidMobile from "../../assets/SOLID.png";
import { LogOut } from "react-feather";
import Menu from "../../assets/menuSolid.svg"
import Cart from "../cart";

const Header = () => {
  return (
    <>
    <Container>
      <MenuMobile src={Menu} alt="ícono menu pesquisa"/>
      <IMGMobileTitle src={solidMobile} alt="Nome da marca, solid control" />
      <IMGDesktopTitle src={solidDesktop} alt="Nome da marca, solid control" />
      <LogOut />
    </Container>
    <Cart />
    </>
  );
};

export default Header;
