import React, { useState, useContext } from 'react';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router';
import {
  Wrapper,
  Title,
  Text,
  InputWrapper,
  TitleWrapper,
  FaCheck,
  InstructionsWrapper,
  ButtonMain,
  ButtonWrapper,
  TextFieldWrapper,
  IconWrapper,
} from './styles';
import { Paper } from '../../components';
import { error } from '../../utils';
import { GlobalUserContext } from '../../contexts';

const ResetPassword: React.FC = () => {
  const { push } = useHistory();
  const { forgotPasswordReset } = useContext(GlobalUserContext);
  const [successfulPasswordReseted, setSuccessfulPasswordReseted] = useState(
    false,
  );
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordConfirm = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const handleResetPasswordClick = async () => {
    if (password !== passwordConfirm) {
      error('As senhas inseridas devem ser iguais!');
      return;
    }

    try {
      await forgotPasswordReset(password);
      setSuccessfulPasswordReseted(true);
    } catch (err) {
      error(err.message);
    }
  };

  const handleBackToHome = () => push('/');

  return (
    <Wrapper>
      {successfulPasswordReseted ? (
        <Paper>
          <TitleWrapper>
            <Title>Senha redefinida com sucesso!</Title>
          </TitleWrapper>
          <IconWrapper>
            <FaCheck />
          </IconWrapper>
          <InstructionsWrapper>
            <Text>Você já estará logado com a nova senha!</Text>
          </InstructionsWrapper>
          <ButtonWrapper>
            <ButtonMain onClick={handleBackToHome}>
              Voltar para a loja
            </ButtonMain>
          </ButtonWrapper>
        </Paper>
      ) : (
        <Paper>
          <TitleWrapper>
            <Title>Redefinir Senha</Title>
          </TitleWrapper>
          <InstructionsWrapper>
            <Text>Agora insira a sua nova senha</Text>
          </InstructionsWrapper>
          <InputWrapper>
            <TextFieldWrapper>
              <TextField
                placeholder="Senha"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={handleChangePassword}
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                placeholder="Confirmar senha"
                type="password"
                fullWidth
                variant="outlined"
                value={passwordConfirm}
                onChange={handleChangePasswordConfirm}
              />
            </TextFieldWrapper>
          </InputWrapper>
          <ButtonWrapper>
            <ButtonMain onClick={handleResetPasswordClick}>
              Redefinir Senha
            </ButtonMain>
          </ButtonWrapper>
        </Paper>
      )}
    </Wrapper>
  );
};

export default ResetPassword;
