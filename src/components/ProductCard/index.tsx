import React, { useContext } from 'react';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import {
  AddCart,
  AddCartWrapper,
  Category,
  FaCartPlus,
  ImageWrapper,
  Img,
  InformationList,
  InformationWrapper,
  Price,
  Title,
  Wrapper,
} from './styles';

type ProductCardProps = {
  id: string;
  imageURL?: ProductImage[];
  collectionName: string;
  name: string;
  price: number;
  quantity?: number;
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageURL = [],
  collectionName,
  name,
  price,
  product,
}) => {
  const { pushProduct } = useContext(GlobalCartContext);
  const handleAddToCart = (product: ProductOnCart) =>
    pushProduct({ product, amountOrdered: 1 });

  return (
    <Wrapper>
      <ImageWrapper to={`/product/${id}`}>
        <Img imageURL={imageURL[0]?.image} />
      </ImageWrapper>
      <InformationWrapper>
        <InformationList to={`/product/${id}`}>
          <Category>{collectionName}</Category>
          <Title>{name}</Title>
          <Price>{toLocalCurrency(price)}</Price>
        </InformationList>

        <AddCartWrapper>
          <AddCart onClick={() => handleAddToCart(product as ProductOnCart)}>
            <FaCartPlus size={20} />
          </AddCart>
        </AddCartWrapper>
      </InformationWrapper>
    </Wrapper>
  );
};

export default ProductCard;
