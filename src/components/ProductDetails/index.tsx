import React, { useContext, useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { fetchSingleProduct } from '../../services';
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
  ButtonMain,
} from './styles';
import { toLocalCurrency } from '../../utils';
import { PurchaseBottom } from '..';
import { GlobalCartContext } from '../../contexts';

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
  }, []);

  const handlePlusCounter = () => setCounterValue(counterValue + 1);

  const handleMinusCounter = () =>
    counterValue >= 2 ? setCounterValue(counterValue - 1) : counterValue;

  const handleAddToCart = () => pushProduct(productData as ProductOnCart);

  const handleRetrieveFirstProductImage = () => {
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
      <Helmet title={productData?.name}>
        <meta name="description" content={productData?.description} />
      </Helmet>
      <DefaultDescriptionWrapper>
        <ImageWrapper>
          <Image alt="product-image" src={handleRetrieveFirstProductImage()} />
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
      <PurchaseBottom addToCard={handleAddToCart} />
    </Wrapper>
  );
};

export default ProductDetails;
