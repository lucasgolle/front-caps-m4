import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";
import { Search } from "react-feather";
import coquinha from "../../assets/cocacola.png";
import hunger from "../../assets/hamburguerX.jpg";
import rusticPotato from "../../assets/rusticPotato.jpg";
import onion from "../../assets/trueOrion.jpg";
import chicken from "../../assets/truechiken.jpg";
import xveg from "../../assets/vegan.jpeg";
import bigBacon from "../../assets/truebacon.jpg";
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
                <IMGProduct src={product.img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div>
                  <span>
                  R$ {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
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
            <ListItem>
                <IMGProduct src={coquinha} alt="coquinha" />
                <h2>Coca Cola</h2>
                <p>A sua coca cola no sabor original</p>
                <div>
                  <span>
                    R$ 10,00
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={hunger} alt="hunger" />
                <h2>Classic Burguer</h2>
                <p>Delicioso hamburguer gourmet com salada e molho especial</p>
                <div>
                  <span>
                    R$ 44,50
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={rusticPotato} alt="rusticPotato" />
                <h2>Batata Rústica</h2>
                <p>Porção de batata rústica crocante</p>
                <div>
                  <span>
                    R$ 33,00
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={onion} alt="onion" />
                <h2>Onion Rings</h2>
                <p>Toda quinta tem promoção de Onion rings, aproveite</p>
                <div>
                  <span>
                    R$ 28,00
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={chicken} alt="chicken" />
                <h2>Chicken Burger</h2>
                <p>Hamburguer de frango com molho especial e salada</p>
                <div>
                  <span>
                    R$ 32,20
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={xveg} alt="xveg" />
                <h2>Vegan Burger</h2>
                <p>Hamburguer vegano, novidade do cardápio com sabor irresistível</p>
                <div>
                  <span>
                    R$ 20,00
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
              <ListItem>
                <IMGProduct src={bigBacon} alt="bigBacon" />
                <h2>Burger & Fries</h2>
                <p>Esse classic duplo burger acompanha fritas crocante</p>
                <div>
                  <span>
                    R$ 67,90
                  </span>
                  <Stars src={estrelas} alt="Avaliação item" />
                </div>
                <Button
                  onClick={() => {
                    toast.success("Produto adicionado");
                  }}
                >
                  Comprar
                </Button>
              </ListItem>
          </ListShowcase>
        </DivShowcase>
      </Container>
        {showModal && <Cart closeCart={changeModalCart} />}
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
            <h2>Rafhael Mallorga</h2>
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
            <h2>Tarcila Garcia</h2>
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
