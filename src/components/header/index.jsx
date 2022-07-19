import {
  Container,
  IMGDesktopTitle,
  IMGMobileTitle,
  MenuMobile,
} from "./style";
import solidDesktop from "../../assets/SOLIDCONTROLTITLE.png";
import solidMobile from "../../assets/SOLID.png";
import { LogOut, ShoppingCart } from "react-feather";
import Menu from "../../assets/menuSolid.svg"

const Header = () => {
  return (
    <Container>
      <MenuMobile src={Menu} alt="ícono menu pesquisa"/>
      <IMGMobileTitle src={solidMobile} alt="Nome da marca, solid control" />
      <IMGDesktopTitle src={solidDesktop} alt="Nome da marca, solid control" />
      <div>
      <ShoppingCart />
      <LogOut />
      </div>
    </Container>
  );
};

export default Header;
