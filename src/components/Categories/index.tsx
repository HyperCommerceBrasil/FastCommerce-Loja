import React, { useContext } from 'react';
import { GlobalCategoriesContext } from '../../contexts';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

type CategoriesProps = {
  handleOptionPress?(name: string): void;
};

const defaultCollections: Collections[] = [
  {
    id: 'default_home',
    name: 'Início',
  },
];

const Categories: React.FC<CategoriesProps> = ({ handleOptionPress }) => {
  const { categories } = useContext(GlobalCategoriesContext);

  const handleCategoryPress = (name: string): void => {
    if (handleOptionPress) handleOptionPress(name);
  };

  return (
    <Wrapper>
      <ScrollabelDiv>
        {defaultCollections.concat(categories).map(({ id, name }) => {
          switch (name) {
            case 'Início':
              return (
                <CategoryWrapper key={id} to="/">
                  <CategoryText>{name}</CategoryText>
                </CategoryWrapper>
              );
            default:
              return (
                <CategoryWrapper
                  key={id}
                  to={`/search?category=${name}`}
                  onClick={() => handleCategoryPress(name)}
                >
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
