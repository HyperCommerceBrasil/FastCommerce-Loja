import React, { useContext } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { GlobalCartContext } from '../../contexts';
import { CartHeader, Wrapper } from './styles';

// type ProductCardProps = {
//   id: string;
//   imageURL?: ProductImage[];
//   collectionName: string;
//   name: string;
//   price: number;
//   quantity?: number;
// };

const Cart: React.FC = () => {
  const { isCartShowing, setIsCartShowing } = useContext(GlobalCartContext);

  const handleHideCart = () => setIsCartShowing();

  return (
    <Wrapper isShowing={isCartShowing}>
      <CartHeader>
        <BsArrowRightShort size={40} onClick={() => handleHideCart} />
      </CartHeader>
      <h1>Produtis</h1>
    </Wrapper>
  );
};

export default Cart;
