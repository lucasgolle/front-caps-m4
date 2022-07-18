import { Container } from "./style";
import { XCircle } from "react-feather";
import Button from "../button";

const Cart = () => {
  return (
    <>
      <Container>
        <section>
          <div>
            <h2>Carrinho</h2>
            <XCircle />
          </div>
      <span>Total: </span>
          <div>
            <Button>Finalizar compra</Button>
            <Button>Continuar comprando</Button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Cart;
