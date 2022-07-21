import {
  ContainerPai,
  DivGlobal,
  ContainerCarrinho,
  HeaderCart,
  DivCartEmpty,
  ContainerULCart,
  UlCarrinho,
  LiCarrinho,
  DivLiInfo,
  DivBotCart,
} from "./style";
import { XCircle } from "react-feather";
import Button from "../button";
import coquinha from "../../assets/cocacola.png";

import React, { useContext } from "react";
import { CartContext } from "../../Providers/cart/";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { BsFillCartXFill } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";

const Cart = ({ closeCart }) => {
  const tokenUser = JSON.parse(localStorage.getItem("@Solid:token")) || "";
  const navigate = useNavigate();
  const { cart, deleteCart, setCart } = useContext(CartContext);

  const getOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("@Solid:cart")) || [];
    const ticketData = {
      ticketProducts: [...cartItems],
      status: "Realizado",
    };

    if (!tokenUser) {
      navigate("/login");
      toast.error("Por favor, faça seu login");
    }

    if (tokenUser && cartItems?.length === 0) {
      toast.error("Carrinho vazio!");
      console.log("carrinho vazio!");
    }

    if (tokenUser && cartItems.length !== 0) {
      axios
        .get(
          `https://api-gamer-shop.herokuapp.com/payment/checkout/12354781/teste@yesye.com/${cartItems[0].name}/${sum}`,
          ticketData,
          {
            headers: { Authorization: `Bearer ${tokenUser}` },
          }
        )
        .then((resp) => {
          window.location.replace(resp.data);
          // if (tokenUser) {
          //   localStorage.removeItem("@Solid:cart");
          //   toast.success("Pedido enviado");
          //   setCart([]);
          //   // closeCart();
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(cart);

  const sum = cart.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  return (
    <>
      <DivGlobal>
        <ContainerPai onClick={closeCart} />
        <ContainerCarrinho>
          <HeaderCart>
            <h2>Carrinho</h2>
            <XCircle onClick={closeCart} />
          </HeaderCart>
          {cart.length < 1 && (
            <DivCartEmpty>
              <h2>Seu carrinho está vazio</h2>
              <BsFillCartXFill />
            </DivCartEmpty>
          )}
          <ContainerULCart>
            <UlCarrinho>
              {cart.map((product, index) => {
                const sumProduct = product.price * product.quantity;
                return (
                  <LiCarrinho key={index}>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.name}</h2>
                    <DivLiInfo>
                      <div>
                        <p>{product.quantity}x</p>
                        <span>
                          {sumProduct.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <Button
                        onClick={() => {
                          deleteCart(product.uniqueId);
                          toast.success("Produto excluído");
                        }}
                      >
                        Excluir
                      </Button>
                    </DivLiInfo>
                  </LiCarrinho>
                );
              })}
            </UlCarrinho>
          </ContainerULCart>
          <DivBotCart>
            <div>
              <p>Total</p>
              <span>
                {sum.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div>
              <Button onClick={getOrder}>Finalizar compra</Button>
              <Button onClick={closeCart}>Continuar comprando</Button>
            </div>
          </DivBotCart>
        </ContainerCarrinho>
      </DivGlobal>
    </>
  );
};

export default Cart;
