import React from 'react';
// import { fetchAllProducts } from '../../services';
import ProductSearch from './ProductSearch';

const ProductSearchContainer: React.FC = () => {
  // const [initialAllProducts, setInitialProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     const categoriesResponse = await fetchAllProducts();
  //     setInitialProducts(categoriesResponse.data);
  //   }

  //   getProducts();
  // }, []);

  return <ProductSearch />;
};

export default ProductSearchContainer;
