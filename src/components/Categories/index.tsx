import React, { useEffect, useState } from 'react';
import { fetchCollections } from '../../services';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

const defaultCollections: Collections[] = [
  {
    id: 'default_home',
    name: 'Início',
  },
];

const Categories: React.FC = () => {
  const [collections, setCollections] = useState<Collections[]>([]);

  useEffect(() => {
    async function getDataProducts() {
      const response = await fetchCollections();
      setCollections(defaultCollections.concat(response.data));
    }
    getDataProducts();
  }, []);

  return (
    <Wrapper>
      <ScrollabelDiv>
        {collections.map(({ id, name }) => {
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
