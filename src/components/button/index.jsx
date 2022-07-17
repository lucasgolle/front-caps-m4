import { Container } from "./style";

const Button = ({ children, ...rest }) => {
 return( <Container {...rest }>
    {children}
  </Container>
  );
};

export default Button;
