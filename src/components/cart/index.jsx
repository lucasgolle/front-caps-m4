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
import { decodeToken } from "react-jwt";
import api from "../../services/api";

const Cart = ({ closeCart }) => {
  const tokenUser = JSON.parse(localStorage.getItem("@Solid:token")) || "";
  const decodedToken = decodeToken(tokenUser);
  const navigate = useNavigate();
  const { cart, deleteCart, setCart } = useContext(CartContext);

  // useEffect(() => {
  //   getUser();
  // });
  // const getUser = () => {
  //   if (decodedToken) {
  //     api.get(`/users/${decodedToken.id}`).then((resp) => {
  //       setUserData(resp.data);
  //     });
  //   }
  // };
  // console.log("userData", userData);

  const getOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("@Solid:cart")) || [];
    const ticketData = {
      ticketProducts: [...cartItems],
      status: "Realizado",
    };

    if (tokenUser && cartItems?.length === 0) {
      console.log("carrinho vazio!");
    }

    if (tokenUser && cartItems.length !== 0) {
      api
        .post("/tickets", ticketData, {
          headers: { Authorization: `Bearer ${tokenUser}` },
        })
        .then((resp) => {
          if (tokenUser) {
            localStorage.removeItem("@Solid:cart");
            setCart([]);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
          <Button onClick={getOrder}>Finalizar compra</Button>
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
