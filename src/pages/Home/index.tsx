import React, { useEffect, useState } from 'react';
import {
  Banner,
  Categories,
  Footer,
  ProductCarrousel,
  Header,
} from '../../components';
import api from '../../services/api';
import { Wrapper } from './styles';

interface Product {
  name: string;
  price: number;
  collection: {
    id: string;
    name: string;
  };
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getDataProducts() {
      const response = await api.get<Product[]>('/public/products/trends');
      setProducts(response.data);
    }

    getDataProducts();
  }, []);
  return (
    <Wrapper>
      <Header />
      <Categories />
      <Banner />
      <ProductCarrousel products={products} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
