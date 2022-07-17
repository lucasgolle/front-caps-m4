import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BackgroundDesktop, Container, Form } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import Banner from "../../assets/bannerSolid2.png";

const Register = () => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Email obrigatório"),
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
      <Form onSubmit={handleSubmit(console.log("oi"))}>
        <h1>Registre-se</h1>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          name="name"
          register={register}
          error={errors.name?.message}
        ></Input>

        <Input
          type="email"
          label="Email"
          placeholder="Digite seu email"
          name="email"
          register={register}
          error={errors.password?.message}
        ></Input>

        <section>
          <section>
            <Input
              type="number"
              label="CEP"
              placeholder="Digite seu CEP"
              name="zip_code"
              register={register}
              error={errors.zip_code?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              label="Estado"
              placeholder="Digite seu Estado"
              name="state"
              register={register}
              error={errors.state?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              label="Endereço"
              placeholder="Digite seu endereço"
              name="street"
              register={register}
              error={errors.street?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="number"
              label="N.º"
              placeholder="Digite seu numero"
              name="number"
              register={register}
              error={errors.number?.message}
            ></Input>
          </section>
        </section>
        <Input
          type="text"
          label="Complemento"
          placeholder="Digite seu complemento"
          name="city"
          register={register}
          error={errors.number?.message}
        ></Input>
        <Input
          type="password"
          label="Senha"
          placeholder="Escolha sua senha"
          name="password"
          register={register}
          error={errors.password?.message}
        ></Input>

        <Button children="Registrar" type="submit" />

        <p>
          Já possui conta? <Link to="/login">Logar</Link>
        </p>
      </Form>
      <BackgroundDesktop>
        <img src={Banner} alt="Imagem decorativa produtos culinários" />
      </BackgroundDesktop>
    </Container>
  );
};

export default Register;
