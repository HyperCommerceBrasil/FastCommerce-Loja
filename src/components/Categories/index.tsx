import React from 'react';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

const defaultCategories = [
  'INÍCIO',
  'NOVIDADES',
  'ELETRÔNICOS',
  'WEARABLES',
  'LAZER',
];

const Categories: React.FC = () => (
  <Wrapper>
    <ScrollabelDiv>
      {defaultCategories.map((item, index) => (
        <CategoryWrapper key={item} to={index ? `search/${item}` : '/'}>
          <CategoryText>{item}</CategoryText>
        </CategoryWrapper>
      ))}
    </ScrollabelDiv>
  </Wrapper>
);

export default Categories;
