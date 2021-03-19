import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import ButtonMain from '../ButtonMain';
import {
  CounterButton,
  ContentWrapper,
  CounterValue,
  CounterWrapper,
  ImageWrapper,
  Img,
  Text,
  Title,
  Wrapper,
  TextWrapper,
  OptionsWrapper,
} from './styles';

const ProductDetails: React.FC = () => {
  const [counterValue, setCounterValue] = useState(1);

  const handlePlusCounter = () => setCounterValue(counterValue + 1);

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  return (
    <Wrapper>
      <ImageWrapper>
        <Img imageURL="https://www.escalaminiaturas.com.br/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/x/1/x1678.jpg" />
      </ImageWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Nome do produto</Title>
          <Text>
            Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
            santis. Quem num gosta di mim que vai caçá sua turmis! A ordem dos
            tratores não altera o pão duris. Leite de capivaris, leite de mula
            manquis sem cabeça.
          </Text>
        </TextWrapper>
        <OptionsWrapper>
          <CounterWrapper>
            <CounterButton onClick={() => handleMinusCounter()}>
              <HiMinus size={25} color="#fff" />
            </CounterButton>
            <CounterValue>{counterValue}</CounterValue>
            <CounterButton onClick={() => handlePlusCounter()}>
              <HiPlus size={25} color="#fff" />
            </CounterButton>
          </CounterWrapper>
          <ButtonMain>ADICIONAR AO CARRINHO</ButtonMain>
        </OptionsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductDetails;
