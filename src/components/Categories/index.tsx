import React, { useEffect, useState } from 'react';
import { fetchCollections } from '../../services';
import {
  CategoryText,
  CategoryWrapper,
  Wrapper,
  ScrollabelDiv,
} from './styles';

const Categories: React.FC = () => {
  const [collections, setCollections] = useState<Collections[]>([]);

  useEffect(() => {
    async function getDataProducts() {
      const response = await fetchCollections();
      setCollections(response.data);
    }
    getDataProducts();
  }, []);

  return (
    <Wrapper>
      <ScrollabelDiv>
        {collections.map(({ id, name }) => (
          <CategoryWrapper key={id} to={`search/${name}`}>
            <CategoryText>{name}</CategoryText>
          </CategoryWrapper>
        ))}
      </ScrollabelDiv>
    </Wrapper>
  );
};

export default Categories;
