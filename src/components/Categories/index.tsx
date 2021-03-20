import React from 'react';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

const Categories: React.FC = () => (
  <Wrapper>
    <ScrollabelDiv>
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
    </ScrollabelDiv>
  </Wrapper>
);

export default Categories;
