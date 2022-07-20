import {
  Container,
  IMGDesktopTitle,
  IMGMobileTitle,
} from "./style";
import solidDesktop from "../../assets/SOLIDCONTROLTITLE.png";
import solidMobile from "../../assets/SOLID.png";
import { LogOut, ShoppingCart } from "react-feather";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";

const Header = ({goLogin, showCart}) => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <IMGMobileTitle src={solidMobile} alt="Nome da marca, solid control" />
      <IMGDesktopTitle src={solidDesktop} alt="Nome da marca, solid control" />
      <div>
        {cart.length > 0 && <span>{cart.length}</span>}
      <ShoppingCart onClick={showCart}/>
      <LogOut onClick={goLogin}/>
      </div>
    </Container>
  );
};

export default Header;
