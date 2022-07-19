import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";
import { Search } from "react-feather";
import coquinha from "../../assets/cocacola.png";

import {
  Container,
  InputSearch,
  DivShowcase,
  ListShowcase,
  ListItem,
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

    const goLogin = () => {
      return navigate('/login', { replace: true })
    }

  return (
    <>
      <Header goLogin={goLogin} showCart={changeModalCart}/>
      <Container animate={defaultAnimation} transition={defaultTransition}>
        <Search />
        <InputSearch placeholder="Digite sua pesquisa" />
        <DivShowcase>
          <ListShowcase>
            {searchFilter.map((product, index) => (
              <ListItem>
                <image src={product.image} />
                <p>{product.name}</p>
              </ListItem>
            ))}
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
            <ListItem>
              <img src={coquinha} alt="imagem produto" />
              <h2>Coca colinha</h2>
              <p>Sempre gelada para acompanhar sua comida.</p>
              <span>R$ 40,00</span>
              <Button>Comprar</Button>
            </ListItem>
          </ListShowcase>
        </DivShowcase>
        {showModal && <Cart closeCart={changeModalCart}/>}
      </Container>
    </>
  );
};

export default HomePage;
