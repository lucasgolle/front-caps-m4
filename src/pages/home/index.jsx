import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";
import { Search } from "react-feather";
import coquinha from "../../assets/cocacola.png";
import { GitHub, Linkedin } from 'react-feather';

import {
  Container,
  InputSearch,
  DivShowcase,
  ListShowcase,
  ListItem,
  FooterHome,
  Devs,
} from "./style";
import Button from "../../components/button";
import Header from "../../components/header";
import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import Cart from "../../components/cart";

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

  const devs = [
    { name: 'Iasmim Dantas', github: '/', linkedin: '/' },
    { name: 'Tarcila Santos Garcia', github: '/', linkedin: '/' },
    { name: 'Raphael Mallorga', github: '/', linkedin: '/' },
    { name: 'Gabriel Schneider', github: '/', linkedin: '/' },
    { name: 'Richard Cândido', github: '/', linkedin: '/' },
    { name: 'Lucas Golle', github: '/', linkedin: '/' },
  ];

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
                <img src={coquinha} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  })}
                </span>
                <Button onClick={() => addCart(product)}>Comprar</Button>
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
            {/* <h4>Created by:</h4> */}
            {devs.map(dev => (
              <div key={dev.name}>
                <h2>{dev.name}</h2>
                <Link target="_blank" to={dev.github}>
                  <GitHub />
                </Link>
                <Link target="_blank" to={dev.linkedin}>
                  <Linkedin />
                </Link>
              </div>
            ))}
          </Devs>
      </FooterHome>
    </>
  );
};

export default HomePage;
