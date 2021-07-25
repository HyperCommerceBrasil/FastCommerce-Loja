import React, { useState, useContext } from 'react';
import { TextField } from '@material-ui/core';
import {
  Wrapper,
  Title,
  Text,
  EmailInputWrapper,
  TitleWrapper,
  InstructionsWrapper,
  ButtonMain,
  ButtonWrapper,
  EmailTitleWrapper,
  TextFieldWrapper,
  BiMailSend,
  IconWrapper,
  BoldText,
} from './styles';
import { Paper } from '../../components';
import { error } from '../../utils';
import { GlobalUserContext } from '../../contexts';

const ForgotPassword: React.FC = () => {
  const { resetPasswordMail, forgotPasswordChallenge } = useContext(
    GlobalUserContext,
  );
  const [successfulEmailSent, setSuccessfulEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => setEmail(event.target.value);

  const handleResetPasswordClick = async () => {
    try {
      setIsSending(true);

      await forgotPasswordChallenge(email);

      setSuccessfulEmailSent(true);
    } catch (err) {
      error(err.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Wrapper>
      {successfulEmailSent ? (
        <Paper>
          <TitleWrapper>
            <Title>Email enviado!</Title>
          </TitleWrapper>
          <IconWrapper>
            <BiMailSend />
          </IconWrapper>
          <InstructionsWrapper>
            <Text>
              Verifique sua caixa de entrada ou spam!
              <br />
              Lá você encontrará o email que enviamos para
              <BoldText>{resetPasswordMail}</BoldText>
              com o link para redefinir sua senha!
            </Text>
          </InstructionsWrapper>
        </Paper>
      ) : (
        <Paper>
          <TitleWrapper>
            <Title>Esqueci minha senha</Title>
          </TitleWrapper>
          <InstructionsWrapper>
            <Text>
              Para redefinir sua senha, informe o usuário ou e-mail cadastrado
              na sua conta e lhe enviaremos um link com as instruções.
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
                onChange={handleEmailChange}
                value={email}
              />
            </TextFieldWrapper>
          </EmailInputWrapper>
          {isSending && (
            <img
              style={{
                height: 40,
                width: 40,
              }}
              alt="Sending mail..."
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            />
          )}
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

export default ForgotPassword;
