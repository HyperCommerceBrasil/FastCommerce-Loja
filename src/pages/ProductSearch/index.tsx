import React from 'react';
import {
  Banner,
  Categories,
  Footer,
  ProductCarrousel,
  Header,
} from '../../components';
import { Wrapper } from './styles';

const ProductSearch: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Categories />
      <Banner />
      <ProductCarrousel />
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <Footer />
    </Wrapper>
  );
};

export default ProductSearch;
