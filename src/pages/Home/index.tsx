import React, { useEffect, useState } from 'react';
import {
  Banner,
  Categories,
  Footer,
  ProductCarrousel,
  Header,
  Cart,
} from '../../components';
import { fetchTrendingProducts } from '../../services';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getDataProducts() {
      const response = await fetchTrendingProducts();
      setProducts(response.data);
    }

    getDataProducts();
  }, []);
  return (
    <Wrapper>
      <Cart />
      <Header />
      <Categories />
      <Banner />
      <ProductCarrousel products={products} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
