import React from 'react';
import { CategoryText, CategoryWrapper, Wrapper } from './styles';

const Categories: React.FC = () => (
  <Wrapper>
    <CategoryWrapper>
      <CategoryText>INÍCIO</CategoryText>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryText>NOVIDADES</CategoryText>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryText>ELETRÔNICOS</CategoryText>
    </CategoryWrapper>
    <CategoryWrapper>
      <CategoryText>WEARABLES</CategoryText>
    </CategoryWrapper>
  </Wrapper>
);

export default Categories;
