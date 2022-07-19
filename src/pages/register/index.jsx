import { defaultAnimation, defaultTransition } from "../../utils/defaultMotion";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BackgroundDesktop, Container, Form } from "./style";
import Input from "../../components/input";
import Button from "../../components/button";
import Banner from "../../assets/bannerSolid2.png";

const FormRegister = () => {
  const history = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    zip_code: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().max(8, "Máximo de 8 caracteres"),
    state: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
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
  } = useForm({ resolver: yupResolver(schema) });

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
      })
      .catch((error) => {
        console.log(error, "CEP inválido");
      });
  };

  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <Form onSubmit={handleSubmit(Register)}>
        <h1>Registre-se</h1>
        <Input
          label="Nome"
          type="text"
          placeholder="digite seu nome"
          name="name"
          register={register}
          error={errors.name?.message}
        ></Input>

        <Input
          type="email"
          label="Email"
          placeholder="digite seu e-mail"
          name="email"
          register={register}
          error={errors.password?.message}
        ></Input>

        <section>
          <section>
            <Input
              type="text"
              label="CEP"
              placeholder="digite seu CEP"
              name="zip_code"
              register={register}
              onBlur={zipCodeSearch}
              error={errors.zip_code?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              label="Estado"
              placeholder="digite seu Estado"
              name="state"
              register={register}
              error={errors.state?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="text"
              label="Endereço"
              placeholder="digite seu endereço"
              name="street"
              register={register}
              error={errors.street?.message}
            ></Input>
          </section>
          <section>
            <Input
              type="number"
              label="Nº"
              placeholder="digite seu número"
              name="number"
              register={register}
              error={errors.number?.message}
            ></Input>
          </section>
        </section>
        <Input
          type="text"
          label="Complemento"
          placeholder="digite seu complemento"
          name="city"
          register={register}
          error={errors.number?.message}
        ></Input>
        <Input
          type="password"
          label="Senha"
          placeholder="digite sua senha"
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

export default FormRegister;
