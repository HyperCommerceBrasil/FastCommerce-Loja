import React from 'react';
import ButtonMain from '../ButtonMain';
import { ButtonWrapper, InternButtonWrapper, Wrapper } from './styles';

type ProductDetailsProps = {
  addToCard?(): void;
  children?: string | JSX.Element[] | React.FC;
};

const PurchaseBottom: React.FC<ProductDetailsProps> = ({ addToCard }) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <InternButtonWrapper>
          <ButtonMain onClick={addToCard}>ADICIONAR AO CARRINHO</ButtonMain>
        </InternButtonWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PurchaseBottom;
