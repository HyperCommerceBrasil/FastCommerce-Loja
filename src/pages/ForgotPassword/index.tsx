import React from 'react';
import { TextField } from '@material-ui/core';
import {
  Wrapper,
  BoxWrapper,
  Title,
  Text,
  EmailInputWrapper,
  TitleWrapper,
  InstructionsWrapper,
  ButtonMain,
  ButtonWrapper,
  EmailTitleWrapper,
  TextFieldWrapper,
} from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <TitleWrapper>
          <Title>Esqueci minha senha</Title>
        </TitleWrapper>
        <InstructionsWrapper>
          <Text>
            Para redefinir sua senha, informe o usuário ou e-mail cadastrado na
            sua conta e lhe enviaremos um link com as instruções.
          </Text>
        </InstructionsWrapper>
        <EmailInputWrapper>
          <EmailTitleWrapper>
            <Text>Digite seu email para redefinir sua senha</Text>
          </EmailTitleWrapper>
          <TextFieldWrapper>
            <TextField
              placeholder="jeff@mymail.com"
              fullWidth
              variant="outlined"
            />
          </TextFieldWrapper>
        </EmailInputWrapper>
        <ButtonWrapper>
          <ButtonMain>Redefinir Senha</ButtonMain>
        </ButtonWrapper>
      </BoxWrapper>
    </Wrapper>
  );
};

export default ForgotPassword;
