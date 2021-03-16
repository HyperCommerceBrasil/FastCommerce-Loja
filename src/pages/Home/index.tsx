import React from 'react';
import {
  Banner,
  Categories,
  Footer,
  ProductCarrousel,
  Header,
} from '../../components';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <Banner />
      <ProductCarrousel />
      <Footer />
    </Wrapper>
  );
};

export default Home;
