import React, { createContext, useState } from 'react';
import { success, warning } from '../../utils';

type CartData = {
  products: ProductOnCart[];
  pushProduct(product: ProductOnCart): void;
  removeProduct(product: ProductOnCart): void;
  handleSetProducts: (products: ProductOnCart[]) => void;
  isCartShowing: boolean;
  setIsCartShowing(): void;
  totalProductsOnCart: number;
  totalPrice: number;
};

export const GlobalCartContext = createContext<CartData>({} as CartData);

export const GlobalCartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductOnCart[]>([]);
  const [totalProductsOnCart, setTotalProductsOnCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartIsShowing, setCartIsShowing] = useState(false);

  const handleGetTotalPrice = (products: ProductOnCart[]) => {
    let i = 0;
    let price = 0;

    while (i < products.length) {
      price += products[i].price;
      i += 1;
    }
    return price;
  };

  const isAlreadyOnCart = (product: ProductOnCart): boolean => {
    let i = 0;

    while (i < products.length) {
      if (products[i].id === product.id) return true;
      i += 1;
    }
    return false;
  };

  const pushProduct = (product: ProductOnCart): void => {
    if (isAlreadyOnCart(product)) {
      warning(
        'Já existe esse produto no carrinho! Caso quiser mais unidades dele, só adicionar por lá. 😉',
      );
      return;
    }

    const updatedProducts = products;
    updatedProducts.push(product);

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setTotalProductsOnCart(updatedProducts.length);
    setProducts(updatedProducts);
    success(`${product.name} adicionado ao carrinho! 🛒`);
  };

  const removeProduct = (product: ProductOnCart): void => {
    const updatedProducts = [];
    let i = 0;

    while (i < products.length) {
      if (products[i].id !== product.id) updatedProducts.push(products[i]);
      i += 1;
    }

    setTotalPrice(handleGetTotalPrice(updatedProducts));
    setTotalProductsOnCart(updatedProducts.length);
    setProducts(updatedProducts);
  };

  const handleSetProducts = (products: ProductOnCart[]) => {
    setTotalPrice(handleGetTotalPrice(products));
    setTotalProductsOnCart(products.length);
    setProducts(products);
  };

  const handleSetCartIsShowing = () => setCartIsShowing(!cartIsShowing);

  return (
    <GlobalCartContext.Provider
      value={{
        products,
        pushProduct,
        removeProduct,
        handleSetProducts,
        isCartShowing: cartIsShowing,
        setIsCartShowing: handleSetCartIsShowing,
        totalPrice,
        totalProductsOnCart,
      }}
    >
      {children}
    </GlobalCartContext.Provider>
  );
};
