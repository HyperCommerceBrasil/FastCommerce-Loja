import React, { useContext } from 'react';
import { GlobalCategoriesContext } from '../../contexts';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

const Categories: React.FC = () => {
  const { categories } = useContext(GlobalCategoriesContext);

  return (
    <Wrapper>
      <ScrollabelDiv>
        {categories.map(({ id, name }) => {
          switch (name) {
            case 'Início':
              return (
                <CategoryWrapper key={id} to="/">
                  <CategoryText>{name}</CategoryText>
                </CategoryWrapper>
              );
            default:
              return (
                <CategoryWrapper key={id} to={`/search/${name}`}>
                  <CategoryText>{name}</CategoryText>
                </CategoryWrapper>
              );
          }
        })}
      </ScrollabelDiv>
    </Wrapper>
  );
};

export default Categories;
