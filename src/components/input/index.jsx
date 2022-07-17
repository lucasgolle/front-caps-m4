import { Container, InputStyled, Label } from "./style";

const Input = ({ label, name, register, error = "", ...rest }) => {
  return (
    <>
      <Container>
        <div>
          <Label>{label}</Label>
          {!!error && <span> - {error}</span>}
        </div>
        <InputStyled>
          <input {...rest} {...register(name)} />
        </InputStyled>
      </Container>
    </>
  );
};

export default Input;
