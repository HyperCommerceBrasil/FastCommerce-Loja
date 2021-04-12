import React from 'react';
import { productMock } from './mock';
import ProductSearch from './ProductSearch';

const ProductSearchContainer: React.FC = () => {
  return <ProductSearch initialAllProducts={productMock} />;
};

export default ProductSearchContainer;
