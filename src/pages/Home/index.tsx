import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet title="Home">
        <meta
          name="description"
          content="Venha conferir vários produtos de maneira rápida e eficiente"
        />
      </Helmet>
      <Header />
      <Categories />
      <Banner />
      <Cart />
      <ProductCarrousel products={products} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
