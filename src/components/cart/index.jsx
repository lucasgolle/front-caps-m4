import { Container, ContainerPai } from "./style";
import { XCircle } from "react-feather";
import Button from "../button";

const Cart = ({closeCart}) => {
  return (
    <>
      <ContainerPai onClick={closeCart}/>
      <Container>
        <div>
          <h2>Carrinho</h2>
          <XCircle  onClick={closeCart}/>
        </div>
        {/* <div>Colocar aqui os produtos</div> */}
        <div>
          <Button>Finalizar compra</Button>
          <Button onClick={closeCart}>Continuar comprando</Button>
        </div>
      </Container>
      <span>Total: </span>
    </>
  );
};

export default Cart;
