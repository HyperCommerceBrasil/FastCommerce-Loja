import React from 'react';
import { AirDots } from '../../assets';
import ButtonMain from '../ButtonMain';
import {
  BuyerOption,
  BuyerWrapper,
  ImageWrapper,
  Title,
  Wrapper,
} from './styles';

const Footer: React.FC = () => (
  <Wrapper>
    <BuyerWrapper>
      <BuyerOption>
        <Title>REDMI AIR DOTS 2</Title>
        <ButtonMain>COMPRAR AGORA</ButtonMain>
      </BuyerOption>
    </BuyerWrapper>
    <ImageWrapper>
      <AirDots />
    </ImageWrapper>
  </Wrapper>
);

export default Footer;
