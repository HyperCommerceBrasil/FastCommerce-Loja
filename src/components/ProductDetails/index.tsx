import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { fetchSingleProduct } from '../../api';
import {
  ContentWrapper,
  ImageWrapper,
  Text,
  Title,
  DefaultDescriptionWrapper,
  TextWrapper,
  OptionsWrapper,
  Wrapper,
  CustomizedDescriptionWrapper,
  Price,
  CustomizedDescriptionTitle,
  ButtonMain,
  CounterWrapper,
} from './styles';
import {
  toLocalCurrency,
  warningProductLimitReachedAmountOrdered,
} from '../../utils';
import { PurchaseBottom, Counter } from '..';
import { GlobalCartContext } from '../../contexts';
import { ImageCarousel } from '../lib';

type ProductDetailsProps = {
  id?: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { id = '' } = useParams<ProductDetailsProps>();
  const { pushProduct } = useContext(GlobalCartContext);
  const [counterValue, setCounterValue] = useState(1);
  const [productData, setProductData] = useState<Product>();

  useEffect(() => {
    async function getDataProducts() {
      const response = await fetchSingleProduct(id);
      setProductData(response.data);
    }

    getDataProducts();
  }, [id]);

  const handlePlusCounter = () => {
    if (productData?.quantity === counterValue) {
      warningProductLimitReachedAmountOrdered(productData.quantity);
      return;
    }
    setCounterValue(counterValue + 1);
  };

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  const handleAddToCart = () =>
    pushProduct({
      product: productData as ProductOnCart,
      amountOrdered: counterValue,
    });

  return (
    <Wrapper>
      <Helmet title={productData?.name}>
        <meta name="description" content={productData?.description} />
      </Helmet>
      <DefaultDescriptionWrapper>
        <ImageWrapper>
          <ImageCarousel images={productData?.images} />
        </ImageWrapper>
        <ContentWrapper>
          <TextWrapper>
            <Title>{productData?.name}</Title>
            <Text>{productData?.description || '😬 Sem descrição!'}</Text>
            <Price>{toLocalCurrency(Number(productData?.price))}</Price>
          </TextWrapper>
          <OptionsWrapper>
            <CounterWrapper>
              <Counter
                counterValue={counterValue}
                setCounterValueMinus={handleMinusCounter}
                setCounterValuePlus={handlePlusCounter}
              />
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
      <PurchaseBottom addToCard={handleAddToCart} />
    </Wrapper>
  );
};

export default ProductDetails;
