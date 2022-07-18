import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";

import {
  Container,
  InputSearch,
  DivShowcase,
  ListShowcase,
  ListItem,
} from "./style";
import Banner from "../../assets/bannerSolid2.png";
import Button from "../../components/button";
import Header from "../../components/header";
import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const { listProducts } = useContext(ShowcaseContext);
  const { addCart } = useContext(CartContext);
  const { inputSearch } = useInputHome();

  const [inViewRef3, inView3] = useInView({
    threshold: 0.2,
  });
  const animation4 = useAnimation();
  useEffect(() => {
    if (inView3) {
      animation4.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 4,
          bounce: 0.4,
        },
      });
    }
    if (!inView3) {
      animation4.start({ y: "-50vh" });
    }
  }, [inView3]);

  const searchFilter = listProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container animate={defaultAnimation} transition={defaultTransition}>
        <InputSearch placeholder="Digite sua pesquisa"></InputSearch>
        <DivShowcase>
          <ListShowcase>
            {searchFilter.map((product, index) => (
              <ListItem>
                <image src={product.image} />
                <p>{product.name}</p>
              </ListItem>
            ))}
          </ListShowcase>
        </DivShowcase>
      </Container>
    </>
  );
};

export default HomePage;
