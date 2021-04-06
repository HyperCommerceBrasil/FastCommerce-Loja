import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Categories,
  Footer,
  Header,
  OptionSelector,
  ContentWrapper,
  ProductSearchListing,
} from '../../components';
import { fetchAllProducts } from '../../services';
import { filterByCollection } from '../../utils';
import { SearchWrapper, Wrapper } from './styles';

type ProductSearchParams = {
  query?: string;
};

const ProductSearch: React.FC = () => {
  const { query = '' } = useParams<ProductSearchParams>();
  const [category, setCategory] = useState(query);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFilteredProducts(filterByCollection(category, allProducts));
  }, [allProducts, category]);

  useEffect(() => {
    async function getAllProducts() {
      const response = await fetchAllProducts();
      setAllProducts(response.data);
      setFilteredProducts(response.data);
    }

    getAllProducts();
  }, []);
  return (
    <Wrapper>
      <Header />
      <Categories />
      <ContentWrapper>
        <SearchWrapper>
          <OptionSelector setCategory={setCategory} category={category} />
        </SearchWrapper>
        <ProductSearchListing products={filteredProducts} />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default ProductSearch;
