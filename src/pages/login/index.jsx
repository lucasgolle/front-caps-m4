import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BackgroundDesktop, Container, ContainerForm, Form } from "./style";
import Input from "../../components/input";
import Logo from "../../components/logo";
import Button from "../../components/button";
import Banner from "../../assets/bannerSolid2.png";
import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";

const LoginPage = () => {
  
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatória"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <BackgroundDesktop>
        <img src={Banner} alt="Imagem decorativa produtos culinários" />
      </BackgroundDesktop>
      <ContainerForm>
        <Form onSubmit={handleSubmit()}>
          <Logo />
          <h1>Faça seu Login aqui !</h1>
          <Input
            label="Email"
            placeholder="Digite seu email"
            name="email"
            register={register}
            error={errors.name?.message}
          ></Input>

          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            name="password"
            register={register}
            error={errors.password?.message}
          ></Input>

          <Button children="Logar" type="submit" />

          <p>
            Não possui conta? <Link to="/">Registre-se</Link>
          </p>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default LoginPage;
