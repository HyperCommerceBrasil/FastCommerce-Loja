import { TextField } from '@material-ui/core';
import React from 'react';
import {
  LoginBoxLink,
  Header,
  Wrapper,
  HeaderTitle,
  FormWrapper,
  InputWrapper,
  LinkWrapper,
  TextFieldLabel,
  ButtonMain,
} from './styles';

type Props = {
  isShowing: boolean;
};

const LoginBox: React.FC<Props> = ({ isShowing = false }) => (
  <Wrapper isShowing={isShowing}>
    <Header>
      <HeaderTitle>Login</HeaderTitle>
      <LoginBoxLink to="/signup">Criar conta</LoginBoxLink>
    </Header>
    <FormWrapper>
      <InputWrapper>
        <TextFieldLabel>E-mail</TextFieldLabel>
        <TextField placeholder="jeff@mymail.com" fullWidth variant="outlined" />
      </InputWrapper>
      <InputWrapper>
        <TextFieldLabel>Senha</TextFieldLabel>
        <TextField placeholder="*****" fullWidth variant="outlined" />
      </InputWrapper>
    </FormWrapper>
    <ButtonMain>Acessar</ButtonMain>
    <LinkWrapper>
      <LoginBoxLink to="/forgot-password">Esqueceu sua senha?</LoginBoxLink>
    </LinkWrapper>
  </Wrapper>
);

export default LoginBox;
