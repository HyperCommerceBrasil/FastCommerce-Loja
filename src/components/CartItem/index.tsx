import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useHistory } from 'react-router';
import { GlobalCartContext } from '../../contexts';
import { toLocalCurrency } from '../../utils';
import {
  DetailsWrapper,
  ProductImage,
  Name,
  Price,
  TotalPrice,
  Wrapper,
  HeaderCartItem,
  DeleteWrapper,
  TextDeatilsWrapper,
} from './styles';

type CartIconProps = {
  product: ProductOnCart;
  handleRemoveProduct?(product: ProductOnCart): void;
};

const CartItem: React.FC<CartIconProps> = ({
  product,
  handleRemoveProduct = () => ({}),
}) => {
  const { push } = useHistory();
  const { setIsCartShowing } = useContext(GlobalCartContext);

  const handleItemClick = () => {
    push(`/product/${product.id}`);
    setTimeout(() => setIsCartShowing(), 50);
  };

  return (
    <Wrapper>
      <DetailsWrapper onClick={() => handleItemClick()}>
        <ProductImage src={product?.images[0].image} />
        <TextDeatilsWrapper>
          <HeaderCartItem>
            <Name>{product?.name || 'Some name'}</Name>
          </HeaderCartItem>
          <Price>{toLocalCurrency(product?.price)}</Price>
          <TotalPrice>{toLocalCurrency(product?.price)}</TotalPrice>
        </TextDeatilsWrapper>
      </DetailsWrapper>
      <DeleteWrapper>
        <IoMdClose
          color="#fff"
          size={30}
          onClick={() => handleRemoveProduct(product)}
        />
      </DeleteWrapper>
    </Wrapper>
  );
};

export default CartItem;
