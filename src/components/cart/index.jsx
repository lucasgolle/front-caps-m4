import {
  Container,
  ContainerPai,
  DivShowcase,
  ListShowcase,
  ListItem,
} from "./style";
import { XCircle } from "react-feather";
import Button from "../button";
import coquinha from "../../assets/cocacola.png";

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Providers/cart/";
import { useNavigate } from "react-router-dom";
// import { decodeToken } from "react-jwt";
import api from "../../services/api";

const Cart = ({ closeCart }) => {
  const tokenUser = JSON.parse(localStorage.getItem("@Solid:token")) || "";
  // const decodedToken = decodeToken(tokenUser);
  const navigate = useNavigate();
  const { cart, deleteCart, setCart } = useContext(CartContext);
  const [userData, setUserData] = useState({});

  const sum = cart.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  return (
    <>
      <ContainerPai onClick={closeCart} />
      <Container>
        <div>
          <h2>Carrinho</h2>
          <XCircle onClick={closeCart} />
        </div>
        {/* <DivShowcase>
          <ListShowcase>
            {cart.map((product, index) => {
              const sumProduct = product.price * product.quantity;
              return (
                <ListItem key={index}>
                  <img src={coquinha} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>Qtd: {product.quantity}</p>
                  <span>
                    {sumProduct.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <Button onClick={() => deleteCart(product.id)}>
                    Excluir
                  </Button>
                </ListItem>
              );
            })}
          </ListShowcase>
        </DivShowcase> */}
        <div>
          <Button>Finalizar compra</Button>
          <Button onClick={closeCart}>Continuar comprando</Button>
        </div>
      </Container>
      <span>
        Total:
        {sum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </>
  );
};

export default Cart;
