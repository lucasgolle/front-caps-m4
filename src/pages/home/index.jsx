import { Link } from "react-router-dom";
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
import { useEffect } from "react";

const HomePage = () => {
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

  return (
    <>
      <Header />
      <Container animate={defaultAnimation} transition={defaultTransition}>
        {/* <input placedholder="Digite sua pesquisa"></input> */}
        <InputSearch placeholder="Digite sua pesquisa"></InputSearch>
        <DivShowcase>
          <ListShowcase>
            <ListItem></ListItem>
          </ListShowcase>
        </DivShowcase>
      </Container>
    </>
  );
};

export default HomePage;
