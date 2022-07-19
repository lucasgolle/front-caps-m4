import {
  Container,
  IMGDesktopTitle,
  IMGMobileTitle,
} from "./style";
import solidDesktop from "../../assets/SOLIDCONTROLTITLE.png";
import solidMobile from "../../assets/SOLID.png";
import { LogOut, ShoppingCart } from "react-feather";

const Header = ({goLogin, showCart}) => {
  return (
    <Container>
      <IMGMobileTitle src={solidMobile} alt="Nome da marca, solid control" />
      <IMGDesktopTitle src={solidDesktop} alt="Nome da marca, solid control" />
      <div>
      <ShoppingCart onClick={showCart}/>
      <LogOut onClick={goLogin}/>
      </div>
    </Container>
  );
};

export default Header;
