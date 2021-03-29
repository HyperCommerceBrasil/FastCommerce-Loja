import React, { useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { fetchSingleProduct } from '../../services';
import ButtonMain from '../ButtonMain';
import {
  CounterButton,
  ContentWrapper,
  CounterValue,
  CounterWrapper,
  ImageWrapper,
  Text,
  Title,
  DefaultDescriptionWrapper,
  TextWrapper,
  OptionsWrapper,
  Image,
  Wrapper,
  CustomizedDescriptionWrapper,
  Price,
  CustomizedDescriptionTitle,
} from './styles';
import { success, toLocalCurrency } from '../../utils';

type ProductDetailsProps = {
  id?: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { id = '' } = useParams<ProductDetailsProps>();
  const [counterValue, setCounterValue] = useState(1);
  const [productData, setProductData] = useState<Product>();

  useEffect(() => {
    async function getDataProducts() {
      const response = await fetchSingleProduct(id);
      setProductData(response.data);
    }

    getDataProducts();
  }, [id]);

  const handlePlusCounter = () => setCounterValue(counterValue + 1);

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  const handleAddToCart = () =>
    counterValue > 1
      ? success(`${counterValue} itens adicionados ao carrinho! 🛒`)
      : success(`Item adicionado ao carrinho! 🛒`);

  const handleRetrieveProductImage = () => {
    if (productData?.images) {
      try {
        return productData.images[0].image;
      } catch (err) {
        return undefined;
      }
    }
    return undefined;
  };

  return (
    <Wrapper>
      <DefaultDescriptionWrapper>
        <ImageWrapper>
          <Image alt="product-image" src={handleRetrieveProductImage()} />
        </ImageWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{productData?.name}</Title>
            <Text>{productData?.description || '😬 Sem descrição!'}</Text>
            <Price>{toLocalCurrency(Number(productData?.price))}</Price>
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
            <ButtonMain onClick={() => handleAddToCart()}>
              ADICIONAR AO CARRINHO
            </ButtonMain>
          </OptionsWrapper>
        </ContentWrapper>
      </DefaultDescriptionWrapper>
      <CustomizedDescriptionWrapper>
        <CustomizedDescriptionTitle>
          Detalhes do produto
        </CustomizedDescriptionTitle>
        {parse(productData?.details || '')}
      </CustomizedDescriptionWrapper>
    </Wrapper>
  );
};

export default ProductDetails;
