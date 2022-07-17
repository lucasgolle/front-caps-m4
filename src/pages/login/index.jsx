/*eslint-disable*/
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MainContainer } from "./style";
import Input from "../../components/input";

const LoginPage = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("É preciso um email para acessar o site"),
    password: yup.string().required("É preciso uma senha para acessar o site"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const redirectTo = () => {
    navigate("/perfil/usuario", { replace: true });
  };

  const onSubmitFunction = (data) => {
    signIn(data, redirectTo);
  };

  return (
    <section>
      <MainContainer>
        <form>
          <h1>Faça seu Login</h1>
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.name?.message}
          ></Input>

          <Input
            type="password"
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
          ></Input>

          <Link to="/registro/usuario">
            <p>Não possui conta? Registre-se</p>
          </Link>
        </form>
      </MainContainer>
    </section>
  );
};

export default LoginPage;
