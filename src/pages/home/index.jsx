import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";
import { Search } from "react-feather";
import coquinha from "../../assets/cocacola.png";
import { GitHub, Linkedin } from "react-feather";
import estrelas from "../../assets/stars.png";

import {
  Container,
  InputSearch,
  DivShowcase,
  ListShowcase,
  ListItem,
  FooterHome,
  Devs,
  Stars,
  IMGProduct,
} from "./style";
import Button from "../../components/button";
import Header from "../../components/header";
import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import Cart from "../../components/cart";
import { toast } from "react-toastify";

const HomePage = () => {
  const { listProducts } = useContext(ShowcaseContext);
  const { addCart } = useContext(CartContext);
  const { inputSearch } = useInputHome();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const changeModalCart = () => {
    setShowModal(!showModal);
  };

  const searchFilter = listProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const goLogin = () => {
    return navigate("/login", { replace: true });
  };

  return (
    <>
      <Header goLogin={goLogin} showCart={changeModalCart} />
      <Container animate={defaultAnimation} transition={defaultTransition}>
        <Search />
        <InputSearch placeholder="Digite sua pesquisa" />
        <DivShowcase>
          <ListShowcase>
            {searchFilter.map((product, index) => (
              <ListItem key={index}>
                <IMGProduct src={coquinha} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Mande este produto incrível direto para o carrinho</p>
                <div>
                  <span>
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <Stars src={estrelas} alt="Avaliação ítem" />
                </div>
                <Button
                  onClick={() => {
                    addCart(product);
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
            ))}
          </ListShowcase>
        </DivShowcase>
        {showModal && <Cart closeCart={changeModalCart} />}
      </Container>
      <FooterHome>
        <p>
          © Copyright 2022 - Solid Control - Todos os direitos reservados Solid
          Control com Agência Online S.A.
        </p>
        <Devs>
          <div>
            <h2>Iasmim Dantas</h2>
            <a
              href="https://github.com/iasmimd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/iasmimdantas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <h2>Raphael Mallorga</h2>
            <a
              href="https://github.com/rafhaelmallorga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/rafhael-mallorga-44632494"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <h2>Tarcila Santos Garcia</h2>
            <a
              href="https://github.com/tarcilasg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/tarcila-garcia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <h2>Richard Cândido</h2>
            <a
              href="https://github.com/rich-dacan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-andrade-candido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <h2>Lucas Golle</h2>
            <a
              href="https://github.com/lucasgolle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasgolle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div>
            <h2>Gabriel Schneider</h2>
            <a
              href="https://github.com/dejazz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-muniz-schneider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </Devs>
      </FooterHome>
    </>
  );
};

export default HomePage;
