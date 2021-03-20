import React from 'react';
import { ButtonMain } from '..';
import {
  FormWrapper,
  InputWrapper,
  Title,
  Wrapper,
  TextField,
  RowInputs,
  ButtonWrapper,
  SmallInputWrapper,
} from './styles';

const SignUpForm: React.FC = () => {
  return (
    <Wrapper>
      <Title>Criando conta</Title>
      <FormWrapper>
        <InputWrapper>
          <TextField
            label="Nome Completo"
            placeholder="Jonas Adalberto Maria dos Santos"
            fullWidth
          />
        </InputWrapper>
        <InputWrapper>
          <TextField fullWidth label="CEP" placeholder="98780-103" />
        </InputWrapper>
        <RowInputs>
          <SmallInputWrapper>
            <TextField label="UF" placeholder="RS" />
          </SmallInputWrapper>
          <InputWrapper>
            <TextField fullWidth label="Cidade" placeholder="Santa Rosa" />
          </InputWrapper>
        </RowInputs>
        <InputWrapper>
          <TextField
            fullWidth
            label="Endereço"
            placeholder="Rua Antunes Ribas nº 1813"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField fullWidth label="Bairro" placeholder="Jacques Marciano" />
        </InputWrapper>
      </FormWrapper>
      <ButtonWrapper>
        <ButtonMain>Avançar</ButtonMain>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SignUpForm;
