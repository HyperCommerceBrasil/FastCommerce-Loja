import React, { createContext, useState } from 'react';

type CartData = {
  products: ProductOnCart[];
  pushProducts(product: ProductOnCart): void;
  removeProduct(product: ProductOnCart, id: string): void;
  handleSetProducts: (products: ProductOnCart[]) => void;
  isCartShowing: boolean;
  setIsCartShowing(): void;
};

export const GlobalCartContext = createContext<CartData>({} as CartData);

export const GlobalCartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductOnCart[]>([]);
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const pushProducts = (product: ProductOnCart) => {
    const updatedProducts = products;
    updatedProducts.push(product);
    setProducts(updatedProducts);
  };

  const removeProduct = (product: ProductOnCart) => {
    const updatedProducts = products;
    updatedProducts.splice(updatedProducts.indexOf(product), 1);
    console.log(updatedProducts);
  };

  const handleSetProducts = (products: ProductOnCart[]) =>
    setProducts(products);

  const handleSetCartIsShowing = () => setCartIsShowing(!cartIsShowing);

  return (
    <GlobalCartContext.Provider
      value={{
        products,
        pushProducts,
        removeProduct,
        handleSetProducts,
        isCartShowing: cartIsShowing,
        setIsCartShowing: handleSetCartIsShowing,
      }}
    >
      {children}
    </GlobalCartContext.Provider>
  );
};
