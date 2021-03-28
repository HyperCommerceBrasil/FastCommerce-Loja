import React, { useState } from 'react';
import { success, isValidEmail, error } from '../../utils';
import ButtonMain from '../ButtonMain';
import {
  Column,
  ColumnsWrapper,
  Title,
  Wrapper,
  Text,
  Email,
  Link,
  Subtitle,
  Input,
  SignNewsletterWrapper,
  ToastSuccessMessage,
  ToastErrorMessage,
  CopyrightWrapper,
} from './styles';

type FooterProps = {
  shouldHaveBottomPadding?: number;
};

const Footer: React.FC<FooterProps> = ({ shouldHaveBottomPadding }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSignNewsletter = () =>
    isValidEmail(newsletterEmail)
      ? success(
          <>
            <ToastSuccessMessage>Show! 🎉</ToastSuccessMessage>
            <ToastSuccessMessage>
              Agora você ficará por dentro das novidades! 📰
            </ToastSuccessMessage>
          </>,
        )
      : error(
          <>
            <ToastErrorMessage>Opa, algo deu errado! 🤯</ToastErrorMessage>
            <ToastErrorMessage>Seu email está correto?! 🤔</ToastErrorMessage>
          </>,
        );

  return (
    <Wrapper shouldHaveBottomPadding={shouldHaveBottomPadding}>
      <ColumnsWrapper>
        <Column>
          <Title>Five Stars Store</Title>
          <Text>
            Na Five Stars, acreditamos em uma vida mais sofisticada e um dia a
            dia simplificado. Simplifique seu dia a dia e tenho uma vida 5
            estrelas com a five stars{' '}
          </Text>
          <Email href="mailto: contato@fivestars.com.br">
            contato@fivestars.com.br
          </Email>
        </Column>

        <Column>
          <Title>Serviços de Atendimento ao Consumidor</Title>
          <Link href="services/privacy">Política de privacidade</Link>
          <Link href="services/contacts">Contate-nos</Link>
          <Link href="services/service-terms">Termos de serviço</Link>
        </Column>

        <Column>
          <Title>Assine nossa newsletter</Title>
          <Subtitle>Receba promoções e notícias do mundo</Subtitle>
          <SignNewsletterWrapper>
            <Input
              value={newsletterEmail}
              onChange={({ target }) => setNewsletterEmail(target.value)}
              type="email"
            />
            <ButtonMain onClick={() => handleSignNewsletter()}>
              Assinar
            </ButtonMain>
          </SignNewsletterWrapper>
        </Column>
      </ColumnsWrapper>
      <CopyrightWrapper>Five Stars Store © 2021</CopyrightWrapper>
    </Wrapper>
  );
};

export default Footer;
