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
  ButtonLink,
} from './styles';

type Props = {
  isShowing: boolean;
  isCreatingAccount?: boolean;
  emailValue: string;
  passwordValue: string;
  nameValue: string;
  onNameChange(name: string): void;
  onPasswordChange(password: string): void;
  onEmailChange(email: string): void;
  onAccessClick(email: string, password: string): void;
  onCreateAccountClick(name: string, email: string, password: string): void;
  onCreateAccountLinkClick: () => void;
};

const LoginBox: React.FC<Props> = ({
  isShowing = false,
  isCreatingAccount = false,
  onAccessClick,
  onCreateAccountLinkClick,
  onCreateAccountClick,
  emailValue,
  passwordValue,
  nameValue,
  onPasswordChange,
  onEmailChange,
  onNameChange,
}) => {
  const handleMainButtonClick = () => {
    if (isCreatingAccount) {
      onCreateAccountClick(nameValue, emailValue, passwordValue);
    } else {
      onAccessClick(emailValue, passwordValue);
    }
  };

  return (
    <Wrapper isShowing={isShowing}>
      <Header>
        <HeaderTitle>{isCreatingAccount ? 'Cadastre-se' : 'Login'}</HeaderTitle>
        <ButtonLink onClick={onCreateAccountLinkClick}>
          {isCreatingAccount ? 'Login' : 'Cadastre-se'}
        </ButtonLink>
      </Header>
      <FormWrapper>
        {isCreatingAccount && (
          <InputWrapper>
            <TextFieldLabel>Nome Completo</TextFieldLabel>
            <TextField
              placeholder="Jefferson da Silva Rocha"
              fullWidth
              variant="outlined"
              value={nameValue}
              onChange={({ target }) => onNameChange(target.value)}
            />
          </InputWrapper>
        )}
        <InputWrapper>
          <TextFieldLabel>E-mail</TextFieldLabel>
          <TextField
            placeholder="jeff@mymail.com"
            type="email"
            fullWidth
            variant="outlined"
            value={emailValue}
            onChange={({ target }) => onEmailChange(target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <TextFieldLabel>Senha</TextFieldLabel>
          <TextField
            placeholder="********"
            type="password"
            fullWidth
            variant="outlined"
            value={passwordValue}
            onChange={({ target }) => onPasswordChange(target.value)}
          />
        </InputWrapper>
      </FormWrapper>
      <ButtonMain onClick={handleMainButtonClick}>
        {isCreatingAccount ? 'Cadastrar' : 'Acessar'}
      </ButtonMain>
      <LinkWrapper>
        <LoginBoxLink to="/forgot-password">Esqueceu sua senha?</LoginBoxLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default LoginBox;
