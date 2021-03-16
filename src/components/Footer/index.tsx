import React from 'react';
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
} from './styles';

const Footer: React.FC = () => (
  <Wrapper>
    <ColumnsWrapper>
      <Column>
        <Title>Five Stars Store</Title>
        <Text>
          Na Five Stars, acreditamos em uma vida mais sofisticada e um dia a dia
          simplificado. Simplifique seu dia a dia e tenho uma vida 5 estrelas
          com a five stars{' '}
        </Text>
        <Email href="mailto: abc@example.com">contato@fivestars.com.br</Email>
      </Column>

      <Column>
        <Title>Serviços de Atendimento ao Consumidor</Title>
        <Link href="gaersd">Política de privacidade</Link>
        <Link href="gaersd">Contate-nos</Link>
        <Link href="gaersd">Termos de serviço</Link>
      </Column>

      <Column>
        <Title>Assine nossa newsletter</Title>
        <Subtitle>Receba promoções e notícias do mundo</Subtitle>
        <Input onClick={() => ({})} />
        <ButtonMain>Assinar</ButtonMain>
      </Column>
    </ColumnsWrapper>
  </Wrapper>
);

export default Footer;
