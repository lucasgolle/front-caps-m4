import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundDesktop, Container, Form, InputCEP, SpanCEP } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import Banner from "../../assets/bannerSolid2.png";
import api from "../../services/api";
import { useEffect, useState } from "react";

const Register = () => {
  const history = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    zip_code: yup.string().required("Obrigatório"),
    street: yup.string().required(""),
    number: yup
      .string()
      .required("Obrigatório")
      .max(8, "Máximo de 8 caracteres"),
    state: yup.string().required(""),
    city: yup.string().required(""),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Senha deve conter ao menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Register = ({
    name,
    email,
    password,
    zip_code,
    street,
    number,
    city,
    state,
  }) => {
    const user = {
      name,
      email,
      password,
      zip_code,
      street,
      number,
      city,
      state,
    };

    api
      .post("/users/register", user)
      .then((_) => {
        history("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const zipCodeSearch = (event) => {
    const zipCode = event.target.value.replace(/\D/g, "");
    axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then((response) => {
      const address = response.data;
      setValue("street", address.logradouro);
      setValue("city", address.localidade);
      setValue("state", address.uf);
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error, "CEP inválido");
    });
  };

  const [cep, setCEP] = useState("")

  useEffect(() => {

    if (cep.length === 7) {
       zipCodeSearch();
    }
   
   }, [cep])

  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <Form onSubmit={handleSubmit(Register)}>
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
          error={errors.email?.message}
        ></Input>

        <section>

          <SpanCEP>
            <span>CEP</span>
            <InputCEP
              type="number"
              placeholder="Digite seu CEP"
              name="zip_code"
              {...register("zip_code")}
              onBlur={zipCodeSearch}
              error={errors.zip_code?.message}
            ></InputCEP>
          </SpanCEP>
          <section>
            <Input
              type="text"
              label="Estado"
              disabled
              placeholder="Digite seu Estado"
              name="state"
              register={register}
              error={errors.state?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              disabled
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
          <section>
            <Input
              type="text"
              label="Complemento"
              placeholder="Seu complemento"
              name="complement"
              register={register}
              error={errors.complement?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              label="Cidade"
              disabled
              placeholder="Seu cidade"
              name="city"
              register={register}
              error={errors.city?.message}
            ></Input>
          </section>
        </section>
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
