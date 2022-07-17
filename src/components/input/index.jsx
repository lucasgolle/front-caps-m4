import { useState } from 'react';
import { InputStyled } from './style';

const Input = ({ label, name, register, error = '', ...rest }) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <InputStyled valid={isValid}>
      <div>{!!error && <span> {error}</span>}</div>
      <label>{label}</label>
      <input
        {...rest}
        {...register(name)}
        onChange={evt =>
          evt.target.value === '' ? setIsValid(false) : setIsValid(true)
        }
      />
    </InputStyled>
  );
};

export default Input