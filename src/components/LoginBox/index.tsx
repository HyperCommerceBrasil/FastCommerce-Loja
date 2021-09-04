import React from 'react';
import { If } from '../lib';
import { TextInput } from '..';
import {
  LoginBoxLink,
  Header,
  Wrapper,
  HeaderTitle,
  FormWrapper,
  InputWrapper,
  LinkWrapper,
  ButtonMain,
  ButtonLink,
} from './styles';

type Props = {
  isShowing: boolean;
  isCreatingAccount?: boolean;
  emailValue: string;
  emailError?: string;
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
  emailError,
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
        <If condition={isCreatingAccount}>
          <InputWrapper>
            <TextInput
              label="Nome Completo"
              inputProps={{
                placeholder: 'Jefferson da Silva Rocha',
                value: nameValue,
                onChange: ({ target }) => onNameChange(target.value),
              }}
              fullWidth
            />
          </InputWrapper>
        </If>
        <InputWrapper>
          <TextInput
            label="Email"
            inputProps={{
              placeholder: 'jeffinho@mail.com.br',
              inputMode: 'email',
              value: emailValue,
              onChange: ({ target }) => onEmailChange(target.value),
            }}
            fullWidth
            error={emailError}
          />
        </InputWrapper>
        <InputWrapper>
          <TextInput
            label="Senha"
            inputProps={{
              placeholder: '********',
              type: 'password',
              value: passwordValue,
              onChange: ({ target }) => onPasswordChange(target.value),
            }}
            fullWidth
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
