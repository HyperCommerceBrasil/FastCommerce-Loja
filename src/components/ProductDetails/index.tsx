import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import ButtonMain from '../ButtonMain';
import {
  CounterButton,
  ContentWrapper,
  CounterValue,
  CounterWrapper,
  ImageWrapper,
  Text,
  Title,
  Wrapper,
  TextWrapper,
  OptionsWrapper,
  Image,
} from './styles';

type ProductDetailsProps = {
  productImage?: string;
  altImage?: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  altImage,
  productImage,
}) => {
  const [counterValue, setCounterValue] = useState(1);

  const handlePlusCounter = () => setCounterValue(counterValue + 1);

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt={altImage} src={productImage} />
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
